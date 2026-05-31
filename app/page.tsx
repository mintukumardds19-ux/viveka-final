"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const modes = [
  "General Dharma Reflection",
  "Personal Decision",
  "Leadership / Corporate Decision",
  "AI Governance Decision",
  "Education / Child-Centred Decision",
];

const examples = [
  "Should a company fully automate customer support using AI?",
  "Should a school use AI to rank children based on learning speed?",
  "Should I leave a stable job to pursue a meaningful project?",
  "Should a board approve an AI project without understanding model risk?",
];

export default function Home() {
  const [mode, setMode] = useState("General Dharma Reflection");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function askDharma(question?: string) {
    const userMessage = question || message;

    if (!userMessage.trim() || loading) return;

    const visibleHistory: ChatMessage[] = [
      ...history,
      { role: "user", content: userMessage },
    ];

    setHistory(visibleHistory);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    } catch (error) {
      setHistory([
        ...visibleHistory,
        {
          role: "assistant",
          content:
            "I could not respond due to a technical issue. Please check your OpenAI API key, billing, and server logs.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <header className="sticky top-0 z-20 border-b border-[#e6ded0] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold text-[#5f3b18]">
            Viveka<span className="text-[#2f5d50]">.cloud</span>
          </div>
          <nav className="hidden gap-6 text-sm text-[#5b6472] md:flex">
            <a href="#about">About</a>
            <a href="#usecases">Use Cases</a>
            <a href="#vision">MVP-Pro Vision</a>
            <a href="#app">Try It</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-block rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18]">
            AI for responsible decision intelligence
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            Before you decide, understand what your decision may become.
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-[#5b6472]">
            Viveka Cloud presents The Dharma Protocol — an interactive AI
            companion that helps individuals, leaders, educators, and
            organizations examine decisions through consequence, stakeholder
            impact, human accountability, and long-term wisdom.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#app"
              className="rounded-full bg-[#8a5a2b] px-6 py-3 font-semibold text-white"
            >
              Try The Dharma Protocol
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#e6ded0] bg-white px-6 py-3 font-semibold text-[#5f3b18]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-[#5f3b18]">
            What it helps you ask
          </h3>
          <div className="mt-5 space-y-3 text-lg text-[#5b6472]">
            <p>Who benefits?</p>
            <p>Who bears the hidden cost?</p>
            <p>What may become irreversible?</p>
            <p>Where must human judgment remain?</p>
            <p>What would a wiser decision look like?</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-4xl font-bold text-[#5f3b18]">
          What is The Dharma Protocol?
        </h2>
        <p className="mt-5 max-w-4xl text-lg text-[#5b6472]">
          The Dharma Protocol is not an AI that decides for you. It is a
          decision-support system that slows down moments of consequence and
          helps you see the ethical, human, and systemic layers of a choice.
        </p>
        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          It is built on a simple principle: optimization is not the same as
          wisdom. A decision is not good merely because it is fast, efficient,
          or profitable. It must also be responsible, explainable, humane, and
          sustainable.
        </p>
      </section>

      <section id="usecases" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-4xl font-bold text-[#5f3b18]">Use Cases</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              "Personal Decisions",
              "Examine life choices, career dilemmas, relationships, and inner conflicts with clarity and consequence awareness.",
            ],
            [
              "Leadership Decisions",
              "Help leaders think through people impact, organizational risk, fairness, trust, and long-term culture.",
            ],
            [
              "AI Governance",
              "Review AI deployment decisions through explainability, accountability, human oversight, reversibility, and harm prevention.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#5f3b18]">{title}</h3>
              <p className="mt-3 text-[#5b6472]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-4xl font-bold text-[#2f5d50]">
            MVP-Pro Vision
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-[#5b6472]">
            The Dharma Protocol is designed to evolve beyond a standalone AI
            companion. In its MVP-Pro form, it can become a decision-guidance
            layer that sits above different AI models, agentic systems, and
            autonomous workflows.
          </p>
          <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
            As AI systems become capable of setting goals, planning tasks, and
            executing actions with minimal human supervision, The Dharma
            Protocol can help determine whether an AI action should proceed,
            pause, escalate to a human, or be rejected.
          </p>
        </div>
      </section>

      <section id="app" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold text-[#5f3b18]">
          Try The Dharma Protocol
        </h2>
        <p className="mt-3 text-lg text-[#5b6472]">
          Ask a decision question. Then continue with follow-up questions.
        </p>

        <div className="mt-6 rounded-3xl border border-[#e6ded0] bg-white p-5 shadow-xl">
          <label className="text-sm font-semibold text-[#5f3b18]">
            Choose Decision Mode
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#e6ded0] p-3"
          >
            {modes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <div className="mt-5 max-h-[520px] space-y-4 overflow-y-auto rounded-2xl bg-[#f7f3ea] p-4">
            {history.length === 0 && (
              <p className="text-[#5b6472]">
                Start with a question like: Should a company fully automate
                customer support using AI?
              </p>
            )}

            {history.map((item, index) => (
              <div
                key={index}
                className={
                  item.role === "user"
                    ? "ml-auto max-w-3xl rounded-2xl bg-[#8a5a2b] p-4 text-white"
                    : "mr-auto max-w-4xl whitespace-pre-wrap rounded-2xl bg-white p-4 text-[#1f2933] shadow"
                }
              >
                {item.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto max-w-3xl rounded-2xl bg-white p-4 text-[#5b6472] shadow">
                The Dharma Protocol is reflecting...
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask your decision question..."
              className="min-h-[90px] flex-1 rounded-2xl border border-[#e6ded0] p-4"
            />
            <button
              onClick={() => askDharma()}
              disabled={loading}
              className="rounded-2xl bg-[#8a5a2b] px-6 py-4 font-semibold text-white disabled:opacity-50"
            >
              Ask
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => askDharma(ex)}
                className="rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18]"
              >
                {ex}
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

      <footer className="border-t border-[#e6ded0] bg-[#fffaf2] px-6 py-10 text-sm text-[#5b6472]">
        <div className="mx-auto max-w-7xl">
          <p>
            The Dharma Protocol is a reflection and decision-support tool. It
            does not replace legal, medical, financial, employment, compliance,
            professional, or human judgment.
          </p>
          <p className="mt-3">
            © 2026 Viveka Cloud. Built for responsible decision intelligence.
          </p>
        </div>
      </footer>
    </main>
  );
}