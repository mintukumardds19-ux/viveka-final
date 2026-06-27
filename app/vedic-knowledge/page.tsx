"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const vedas = [
  {
    name: "Rigveda",
    subtitle: "Invocation, cosmic order, clarity, and awakening",
    essence:
      "The Rigveda helps us begin with clarity of intent. It reminds us to respect the larger order before acting.",
    question: "Is my intention clear, and does this action create order or disorder?",
  },
  {
    name: "Yajurveda",
    subtitle: "Action, discipline, process, and responsibility",
    essence:
      "The Yajurveda reminds us that how an action is performed matters as much as the action itself.",
    question: "Is the process responsible, accountable, and properly sequenced?",
  },
  {
    name: "Samaveda",
    subtitle: "Harmony, rhythm, communication, and alignment",
    essence:
      "The Samaveda brings attention to harmony, voice, relationship, communication, and collective alignment.",
    question: "Will this decision create harmony or silent dissonance?",
  },
  {
    name: "Atharvaveda",
    subtitle: "Wellbeing, protection, healing, and practical life",
    essence:
      "The Atharvaveda brings wisdom closer to lived reality, fear, vulnerability, healing, and protection.",
    question: "Who needs protection, healing, or stability before this action proceeds?",
  },
];

const modes = [
  "Indian Philosophy Reflection",
  "Vedic Knowledge",
  "Dharma & Karma",
  "Ahimsa & Satya",
  "Viveka & Vairagya",
  "Nyaya & Samkhya",
  "Yoga & Vedanta",
];

const examples = [
  "How can Dharma help me decide between ambition and family responsibility?",
  "Should a leader hide bad news to protect team morale?",
  "How would Karma and Ahimsa view layoffs for short-term profit?",
  "What does Viveka suggest when both options look attractive?",
  "How can Indian philosophy guide ethical AI decisions?",
  "Should a school rank children publicly based on performance?",
];


export default function VedicKnowledgePage() {
  const [mode, setMode] = useState("Indian Philosophy Reflection");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.email) {
        setUserEmail(session.user.email);
      }

      setAuthLoading(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email || "");
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function askVedic(question?: string) {
    const userMessage = question || message;

    if (!userMessage.trim() || loading) return;

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      setHistory([
        ...history,
        {
          role: "assistant",
          content:
            "Please login from the home page before using the Vedic Knowledge Companion.",
        },
      ]);
      return;
    }

    const visibleHistory: ChatMessage[] = [
      ...history,
      { role: "user", content: userMessage },
    ];

    setHistory(visibleHistory);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/vedic-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          message: userMessage,
          mode,
          history,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setHistory([
        ...visibleHistory,
        { role: "assistant", content: data.answer },
      ]);
    } catch {
      setHistory([
        ...visibleHistory,
        {
          role: "assistant",
          content:
            "I could not respond due to a technical issue. Please check your login session, OpenAI API key, billing, and server logs.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (authLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f3ea] text-[#5f3b18]">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-xl">
          Loading Vedic Knowledge...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <header className="border-b border-[#e6ded0] bg-white/90 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="leading-tight">
            <div className="text-xl font-bold text-[#5f3b18]">
              viveka<span className="text-[#2f5d50]">.cloud</span>
            </div>
            <div className="hidden text-xs tracking-[0.18em] text-[#5b6472] sm:block">
              VEDIC & INDIAN PHILOSOPHY KNOWLEDGE
            </div>
          </a>

          <div className="flex items-center gap-3">
            {userEmail ? (
              <span className="hidden text-sm text-[#5b6472] md:inline">
                {userEmail}
              </span>
            ) : (
              <span className="hidden text-sm text-[#8a5a2b] md:inline">
                Login required for chat
              </span>
            )}

            <a
              href="/"
              className="rounded-full border border-[#e6ded0] bg-white px-4 py-2 text-sm font-semibold text-[#5f3b18]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-5xl">
          <div className="mb-5 inline-block rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18]">
            Ancient wisdom for modern ethical decisions
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            Vedic Knowledge & Indian Philosophy Companion
          </h1>

          <p className="mt-6 text-xl text-[#5b6472]">
            Explore the four Vedas and Indian philosophical traditions through
            a practical, interactive companion. Ask real-life dilemmas and
            reflect through Dharma, Karma, Ahimsa, Satya, Viveka, Nyaya, Yoga,
            Vedanta, and other Indian wisdom lenses.
          </p>

          <p className="mt-4 text-lg text-[#5b6472]">
            This section is not a religious authority or a substitute for
            professional advice. It is a reflective space for clearer,
            wiser, more responsible decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            The Four Vedas as Decision Lenses
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The Vedas can be approached as four complementary knowledge streams:
            clarity, action, harmony, and wellbeing. For modern ethical
            decisions, they help us ask better questions before we act.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {vedas.map((veda) => (
            <div
              key={veda.name}
              className="rounded-3xl border border-[#e6ded0] bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#5f3b18]">
                {veda.name}
              </h3>

              <p className="mt-2 font-semibold text-[#2f5d50]">
                {veda.subtitle}
              </p>

              <p className="mt-4 text-[#5b6472]">{veda.essence}</p>

              <div className="mt-5 rounded-2xl bg-[#fffaf2] p-5">
                <p className="font-semibold text-[#8a5a2b]">
                  Decision question
                </p>
                <p className="mt-2 text-[#5b6472]">{veda.question}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-6 shadow-xl">
          <div className="flex flex-col justify-between gap-5 border-b border-[#e6ded0] pb-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#5f3b18]">
                Interactive Indian Philosophy Chat
              </h2>

              <p className="mt-2 text-[#5b6472]">
                Ask a dilemma and continue the conversation. The companion will
                respond using Indian philosophical lenses rather than fixed
                pre-written answers.
              </p>
            </div>

            <div className="min-w-[260px]">
              <label className="text-sm font-semibold text-[#5f3b18]">
                Reflection Mode
              </label>

              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#e6ded0] bg-white p-3"
              >
                {modes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          {!userEmail && (
            <div className="mt-5 rounded-2xl border border-[#e6ded0] bg-[#fffaf2] p-5 text-[#8a5a2b]">
              Please login from the home page to use the interactive Vedic
              Knowledge Companion.
            </div>
          )}

          <div className="mt-5 max-h-[620px] space-y-4 overflow-y-auto rounded-3xl bg-[#f7f3ea] p-5">
            {history.length === 0 && (
              <div className="rounded-2xl bg-white p-5 text-[#5b6472] shadow-sm">
                Start with a real question, such as: “How can Dharma help me
                decide between ambition and family responsibility?”
              </div>
            )}

            {history.map((item, index) => (
              <div
                key={index}
                className={
                  item.role === "user"
                    ? "ml-auto max-w-3xl rounded-2xl bg-[#8a5a2b] p-4 text-white"
                    : "mr-auto max-w-4xl whitespace-pre-wrap rounded-2xl bg-white p-5 text-[#1f2933] shadow"
                }
              >
                {item.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto max-w-4xl rounded-2xl border border-[#e6ded0] bg-white px-5 py-4 text-[#5b6472] shadow-sm">
                <span className="font-semibold text-[#5f3b18]">
                  The Vedic Knowledge Companion is reflecting
                </span>{" "}
                — reading the question through Dharma, Karma, Viveka, and ancient Indian wisdom...
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a real-life dilemma through Indian philosophy..."
              className="min-h-[100px] flex-1 rounded-2xl border border-[#e6ded0] p-4"
            />

            <button
              onClick={() => askVedic()}
              disabled={loading || !userEmail}
              className="rounded-2xl bg-[#8a5a2b] px-7 py-4 font-semibold text-white disabled:opacity-50"
            >
              Ask
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {examples.map((example) => (
              <button
                key={example}
                onClick={() => askVedic(example)}
                disabled={loading || !userEmail}
                className="rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18] disabled:opacity-50"
              >
                {example}
              </button>
            ))}
          </div>

          <button
            onClick={() => setHistory([])}
            className="mt-5 text-sm font-semibold text-[#8a5a2b]"
          >
            Clear conversation
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            How This Connects to The Dharma Protocol
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The Dharma Protocol uses the same spirit in a modern AI context:
            intelligence must not become consequence without reflection. Vedic
            and Indian philosophical lenses help deepen that reflection by
            asking about duty, consequence, harm, truth, discernment, inner
            steadiness, and human accountability.
          </p>

          <p className="mt-4 text-lg font-semibold text-[#2f5d50]">
            Ancient wisdom becomes useful when it improves present decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            For More Information
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            For access requests, project updates, collaborations, or relevant
            queries, write to{" "}
            <a
              href="mailto:info@viveka.cloud"
              className="font-semibold text-[#8a5a2b] underline"
            >
              info@viveka.cloud
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e6ded0] bg-[#fffaf2] px-6 py-10 text-sm text-[#5b6472]">
        <div className="mx-auto max-w-7xl">
          <p>
            This Vedic and Indian Philosophy Knowledge section is for
            reflection, education, and decision-support. It does not replace
            religious, professional, legal, medical, financial, compliance,
            employment, or human judgment.
          </p>

          <p className="mt-3">
            © 2026 Viveka Cloud. Building responsible decision intelligence for
            the age of AI.
          </p>
        </div>
      </footer>
    </main>
  );
}