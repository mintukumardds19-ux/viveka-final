import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export async function GET(req: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return Response.json(
        { error: "Supabase environment variables are missing." },
        { status: 500 }
      );
    }

    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return Response.json({ error: "Not authenticated." }, { status: 401 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user || !user.email) {
      return Response.json({ error: "Invalid session." }, { status: 401 });
    }

    const adminEmails = getAdminEmails();
    const isAdmin = adminEmails.includes(user.email.toLowerCase());

    return Response.json({
      email: user.email,
      isAdmin,
    });
  } catch {
    return Response.json(
      { error: "Could not verify user." },
      { status: 500 }
    );
  }
}