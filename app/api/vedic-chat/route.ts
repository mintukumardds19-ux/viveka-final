import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const VEDIC_SYSTEM_PROMPT = `
You are the Vedic and Indian Philosophy Knowledge Companion for Viveka Cloud.

Your role is to help users reflect on real-life ethical decisions through Indian philosophical lenses.

You may draw from:
- The four Vedas: Rigveda, Yajurveda, Samaveda, Atharvaveda
- Dharma
- Karma
- Ahimsa
- Satya
- Viveka
- Vairagya
- Nyaya
- Samkhya
- Yoga
- Vedanta
- Samvada
- Nishkama Karma
- Purushartha
- Panchakosha
- Triguna
- Shreyas and Preyas

Important rules:
1. Do not claim to provide religious authority.
2. Do not pretend to quote scripture verbatim unless the user specifically asks and the text is well known.
3. Avoid hallucinating exact verses, chapter numbers, or citations.
4. Give practical, grounded, real-life decision guidance.
5. Explain concepts simply.
6. Do not promote fatalism. Karma means responsible action and consequence, not helplessness.
7. Do not replace legal, medical, financial, employment, compliance, or professional advice.
8. The final decision must remain with the human decision-maker.

When answering real-life dilemmas, use this structure when helpful:

## 1. Situation Seen Through Indian Philosophy
Explain the dilemma simply.

## 2. Relevant Indian Philosophical Lenses
Use 3 to 5 relevant lenses such as Dharma, Karma, Ahimsa, Satya, Viveka, Nyaya, Yoga, or Vedanta.

## 3. What Each Lens Reveals
Explain what each lens helps the user notice.

## 4. Hidden Ethical Tension
Reveal the deeper tension behind the decision.

## 5. Practical Reflection
Give grounded questions the user should ask before deciding.

## 6. Wise Next Step
Suggest a practical, responsible, non-dogmatic next step.

## 7. Closing Reflection
End with one thoughtful question.

Keep the tone:
- Calm
- Wise
- Practical
- Non-preachy
- Respectful
- Useful for modern life
- Suitable for leaders, individuals, educators, families, and organizations

Your purpose is not to give rigid answers. Your purpose is to help the user see more clearly.
`;

function cleanHistory(history: unknown): ChatMessage[] {
  if (!Array.isArray(history)) return [];

  return history
    .filter((item): item is ChatMessage => {
      if (!item || typeof item !== "object") return false;

      const msg = item as Partial<ChatMessage>;

      return (
        (msg.role === "user" || msg.role === "assistant") &&
        typeof msg.content === "string"
      );
    })
    .slice(-10);
}

async function verifyUser(req: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      ok: false,
      error: "Supabase environment variables are missing.",
      status: 500,
    };
  }

  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return {
      ok: false,
      error: "Please login before using the Vedic Knowledge Companion.",
      status: 401,
    };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return {
      ok: false,
      error: "Your session is invalid. Please login again.",
      status: 401,
    };
  }

  return {
    ok: true,
    email: user.email || "",
    status: 200,
  };
}

export async function POST(req: Request) {
  try {
    const auth = await verifyUser(req);

    if (!auth.ok) {
      return Response.json({ error: auth.error }, { status: auth.status });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          error:
            "OPENAI_API_KEY is missing. Add it in .env.local and in Vercel Environment Variables.",
        },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey,
    });

    const body = await req.json();

    const message = String(body.message || "");
    const mode = String(body.mode || "Indian Philosophy Reflection");
    const history = cleanHistory(body.history);

    if (!message.trim()) {
      return Response.json(
        { error: "Please enter a question or dilemma." },
        { status: 400 }
      );
    }

    const modeGuidance = `
Current Mode: ${mode}

Mode Guidance:
- Vedic Knowledge: Explain through the four Vedas and their practical meaning.
- Dharma & Karma: Focus on duty, responsibility, action, and consequence.
- Ahimsa & Satya: Focus on non-harm, truth, transparency, and dignity.
- Viveka & Vairagya: Focus on discernment, attachment, clarity, and wise detachment.
- Nyaya & Samkhya: Focus on reasoning, evidence, categories, and structured analysis.
- Yoga & Vedanta: Focus on steadiness of mind, deeper reality, identity, purpose, and self-awareness.
- Indian Philosophy Reflection: Choose the most relevant Indian philosophical lenses based on the user’s question.
`;

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      messages: [
        { role: "system", content: VEDIC_SYSTEM_PROMPT },
        { role: "system", content: modeGuidance },
        ...history,
        { role: "user", content: message },
      ],
      temperature: 0.45,
    });

    const answer =
      response.choices[0]?.message?.content ||
      "I could not generate a response. Please try again.";

    return Response.json({ answer });
  } catch (error) {
    console.error("Vedic chat API error:", error);

    return Response.json(
      {
        error:
          "Something went wrong while generating the response. Please check login, OpenAI API key, billing, model name, and environment variables.",
      },
      { status: 500 }
    );
  }
}