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

function ReflectionMatrix() {
  const matrixRows = [
    "0101 1100 DHARMA 0011 VIVEKA 1010",
    "STAKEHOLDER MAP // ACTIVE",
    "CONSEQUENCE SCAN // RUNNING",
    "HIDDEN COST DETECTION // RUNNING",
    "REVERSIBILITY CHECK // RUNNING",
    "HUMAN ACCOUNTABILITY // REQUIRED",
    "NON-HARM FILTER // ACTIVE",
    "LONG-TERM HARMONY // CALCULATING",
    "RESPONSE FORMATION // IN PROGRESS",
  ];

  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-[#7fffd4]/30 bg-black p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between border-b border-[#7fffd4]/20 pb-2">
        <div className="text-xs font-semibold tracking-[0.28em] text-[#7fffd4]">
          THE DHARMA PROTOCOL
        </div>
        <div className="text-xs text-[#7fffd4]/70">REFLECTING...</div>
      </div>

      <div className="relative h-48 overflow-hidden font-mono text-sm">
        <div className="absolute inset-0 space-y-2 text-[#7fffd4] opacity-90">
          {matrixRows.map((row, index) => (
            <div
              key={row}
              className="animate-pulse whitespace-nowrap"
              style={{
                opacity: 1 - index * 0.07,
                transform: `translateX(${index % 2 === 0 ? "0px" : "24px"})`,
              }}
            >
              {row}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#7fffd4]/20 pt-2 text-xs tracking-[0.3em] text-[#7fffd4]/70">
          ANALYSING // PAUSE • REFLECT • ESCALATE • RESPOND
        </div>
      </div>
    </div>
  );
}

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
    } catch {
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
            viveka<span className="text-[#2f5d50]">.cloud</span>
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
            Responsible AI for consequential decisions
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            Before you decide, understand what your decision may become.
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-[#5b6472]">
            Viveka Cloud builds AI systems that help people and organizations
            make wiser, more accountable decisions. The Dharma Protocol is our
            first decision-intelligence layer — designed to examine choices
            through consequence, stakeholder impact, human accountability, and
            long-term wisdom.
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
            The questions most decisions skip
          </h3>

          <div className="mt-5 space-y-3 text-lg text-[#5b6472]">
            <p>Who benefits — and who quietly bears the cost?</p>
            <p>What harm may appear only later?</p>
            <p>What becomes difficult to reverse?</p>
            <p>Where must human judgment remain non-negotiable?</p>
            <p>What would a more responsible decision look like?</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-4xl font-bold text-[#5f3b18]">
          What is The Dharma Protocol?
        </h2>

        <p className="mt-5 max-w-4xl text-lg text-[#5b6472]">
          The Dharma Protocol is a decision-intelligence framework that helps
          users pause before high-impact choices. It does not make decisions on
          behalf of humans. Instead, it reveals the ethical, human,
          operational, and long-term consequences that are often missed in fast
          decision-making.
        </p>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          It is built on a simple belief: intelligence without accountability
          is incomplete. A decision is not good merely because it is fast,
          efficient, or profitable. It must also be explainable, humane,
          reversible where possible, and aligned with long-term responsibility.
        </p>
      </section>

      <section id="usecases" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-4xl font-bold text-[#5f3b18]">Use Cases</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              "Personal Decisions",
              "Explore important life and career choices with greater clarity, emotional honesty, reversibility, and long-term peace.",
            ],
            [
              "Leadership Decisions",
              "Support leaders in evaluating people impact, trust, fairness, culture, implementation risk, and accountability.",
            ],
            [
              "AI Governance",
              "Assess AI decisions through explainability, human oversight, data responsibility, bias risk, and harm prevention.",
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
            Built for the age of agentic AI
          </h2>

          <p className="mt-5 max-w-4xl text-lg text-[#5b6472]">
            The Dharma Protocol is designed to evolve beyond a standalone
            assistant. In its MVP-Pro form, it can become a decision-guidance
            layer that sits above AI models, agentic systems, and autonomous
            workflows.
          </p>

          <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
            As AI systems begin to set goals, plan tasks, and execute actions
            with less human supervision, every serious AI workflow will need a
            way to ask: should this action proceed, pause, escalate, or be
            rejected?
          </p>

          <p className="mt-4 max-w-4xl text-lg font-semibold text-[#2f5d50]">
            As AI becomes more autonomous, decision-making must become more
            accountable.
          </p>
        </div>
      </section>

      <section id="app" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold text-[#5f3b18]">
          Try The Dharma Protocol
        </h2>

        <p className="mt-3 text-lg text-[#5b6472]">
          Ask a real decision question. The system will help you examine the
          choice through consequences, stakeholders, accountability, and
          long-term responsibility.
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

          <div className="mt-5 max-h-[560px] space-y-4 overflow-y-auto rounded-2xl bg-[#f7f3ea] p-4">
            {history.length === 0 && (
              <p className="text-[#5b6472]">
                Start with a meaningful decision question, such as: Should our
                organization deploy AI for customer support without human
                escalation?
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

            {loading && <ReflectionMatrix />}
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
            The Dharma Protocol is a reflection and decision-support system. It
            does not replace legal, medical, financial, employment, compliance,
            professional, or human judgment. Final responsibility must remain
            with the human decision-maker.
          </p>

          <p className="mt-3">
            © 2026 viveka cloud. Building responsible decision intelligence for
            the age of AI.
          </p>
        </div>
      </footer>
    </main>
  );
}