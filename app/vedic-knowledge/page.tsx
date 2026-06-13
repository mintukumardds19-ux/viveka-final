"use client";

import { useState } from "react";

type PhilosophyLens = {
  name: string;
  question: string;
  meaning: string;
  practicalUse: string;
};

const vedas = [
  {
    name: "Rigveda",
    subtitle: "Knowledge of hymns, praise, cosmic order, and awakening",
    essence:
      "The Rigveda is the oldest of the Vedas and contains hymns addressed to deities such as Agni, Indra, Varuna, Surya, and others. Its deeper value for modern life lies in its attention to order, gratitude, invocation, responsibility, and the relationship between human aspiration and cosmic rhythm.",
    realLifeUse:
      "Use the Rigvedic lens when you need clarity of intent, respect for forces larger than yourself, and humility before beginning an important action.",
    decisionQuestions: [
      "Is my intention clear before I begin?",
      "Am I acting with respect for the larger system around me?",
      "Am I recognizing the visible and invisible forces that support this decision?",
      "Does this action create order or disorder?",
    ],
  },
  {
    name: "Yajurveda",
    subtitle: "Knowledge of action, ritual discipline, duty, and execution",
    essence:
      "The Yajurveda is closely connected with ritual action and sacred formulas. Its practical wisdom lies in disciplined action, right procedure, responsibility in execution, and the understanding that how an action is performed matters as much as the action itself.",
    realLifeUse:
      "Use the Yajurvedic lens when a decision is moving from thought to execution, especially when process, accountability, timing, and role clarity matter.",
    decisionQuestions: [
      "Is the process as responsible as the goal?",
      "Who has the authority to execute this action?",
      "Have I followed the right sequence before acting?",
      "Is this action disciplined, accountable, and properly reviewed?",
    ],
  },
  {
    name: "Samaveda",
    subtitle: "Knowledge of chants, harmony, rhythm, and alignment",
    essence:
      "The Samaveda is associated with chants and musical rendering, largely drawing verses from the Rigveda. Its deeper philosophical value is harmony: the alignment of voice, rhythm, intention, and collective resonance.",
    realLifeUse:
      "Use the Samavedic lens when a decision affects relationships, culture, teams, communication, morale, or collective harmony.",
    decisionQuestions: [
      "Will this decision create harmony or dissonance?",
      "Have the affected voices been heard?",
      "Is the communication graceful and respectful?",
      "Does this action align people, or does it silently divide them?",
    ],
  },
  {
    name: "Atharvaveda",
    subtitle: "Knowledge of everyday life, healing, protection, and practical welfare",
    essence:
      "The Atharvaveda contains material related to practical life, healing, protection, anxieties, domestic concerns, and human welfare. It brings philosophical attention closer to lived reality, vulnerability, fear, repair, and protection.",
    realLifeUse:
      "Use the Atharvavedic lens when decisions affect safety, wellbeing, health, security, risk, social stability, or vulnerable people.",
    decisionQuestions: [
      "Who may be harmed if this decision goes wrong?",
      "Does this action protect the vulnerable?",
      "What fear, anxiety, or insecurity is hidden in this situation?",
      "What must be healed, protected, or stabilized before acting?",
    ],
  },
];

const philosophyLenses: PhilosophyLens[] = [
  {
    name: "Dharma",
    question: "What is the responsible path here?",
    meaning:
      "Dharma asks whether the action is aligned with duty, order, context, and responsibility. It is not merely about personal preference, but about right alignment with the situation.",
    practicalUse:
      "Use this lens when choosing between convenience and responsibility.",
  },
  {
    name: "Karma",
    question: "What consequence will this action create?",
    meaning:
      "Karma reminds us that action is never isolated. Every choice creates effects — visible, delayed, personal, social, and institutional.",
    practicalUse:
      "Use this lens before taking action that may create long-term consequences.",
  },
  {
    name: "Ahimsa",
    question: "How can harm be minimized?",
    meaning:
      "Ahimsa is the discipline of non-harm. It does not always mean inaction. It means choosing the path that reduces unnecessary injury, humiliation, exploitation, or violence.",
    practicalUse:
      "Use this lens when a decision affects people, dignity, trust, or psychological safety.",
  },
  {
    name: "Satya",
    question: "What truth must not be hidden?",
    meaning:
      "Satya asks whether facts, motives, risks, and uncertainties are being honestly represented. A decision built on concealment becomes ethically weak.",
    practicalUse:
      "Use this lens when communication, reporting, leadership, governance, or AI transparency is involved.",
  },
  {
    name: "Viveka",
    question: "What must be distinguished clearly?",
    meaning:
      "Viveka means discernment — the ability to distinguish appearance from reality, short-term gain from long-term good, and desire from wisdom.",
    practicalUse:
      "Use this lens when a decision is emotionally charged, confusing, or attractive in the short term.",
  },
  {
    name: "Vairagya",
    question: "What attachment is influencing this choice?",
    meaning:
      "Vairagya is wise detachment. It helps identify whether ego, fear, greed, status, comfort, or insecurity is shaping the decision.",
    practicalUse:
      "Use this lens when ambition, comparison, anxiety, or personal attachment may distort judgment.",
  },
  {
    name: "Nyaya",
    question: "Is the reasoning valid?",
    meaning:
      "Nyaya emphasizes logic, evidence, inference, and valid reasoning. It asks whether the conclusion follows from reliable grounds.",
    practicalUse:
      "Use this lens when analysing arguments, claims, evidence, AI outputs, reports, or decisions.",
  },
  {
    name: "Samkhya",
    question: "What are the components of this situation?",
    meaning:
      "Samkhya helps separate the observer, the system, the forces, the tendencies, and the material conditions. It encourages structured analysis rather than emotional confusion.",
    practicalUse:
      "Use this lens to break complex situations into parts before deciding.",
  },
  {
    name: "Yoga",
    question: "Is the mind steady enough to decide?",
    meaning:
      "Yoga reminds us that disturbed attention leads to disturbed decisions. A calm and disciplined mind sees better.",
    practicalUse:
      "Use this lens when stress, anger, fear, urgency, or distraction may corrupt judgment.",
  },
  {
    name: "Vedanta",
    question: "What is the deeper reality beyond the immediate situation?",
    meaning:
      "Vedanta asks us to look beyond surface identity, possession, ego, and temporary gain. It invites a larger view of self, purpose, and unity.",
    practicalUse:
      "Use this lens when a decision has existential, moral, or identity-level significance.",
  },
];

const sampleDilemmas = [
  "Should I choose a higher-paying role that conflicts with my values?",
  "Should an organization deploy AI even if employees do not fully understand its impact?",
  "Should a leader hide bad news to protect morale?",
  "Should a school rank children publicly based on performance?",
  "Should a company reduce people to improve short-term margins?",
  "Should I act quickly, or pause until I understand the consequences?",
];

export default function VedicKnowledgePage() {
  const [selectedLens, setSelectedLens] = useState(philosophyLenses[0]);
  const [dilemma, setDilemma] = useState(sampleDilemmas[0]);

  function generateReflection() {
    return {
      first:
        "Pause first. Do not treat speed as wisdom. The question must be examined through intention, consequence, harm, truth, and responsibility.",
      second: `${selectedLens.name} asks: ${selectedLens.question}`,
      third: selectedLens.meaning,
      fourth: `Applied to your dilemma — "${dilemma}" — this lens suggests that the decision should not be judged only by immediate benefit. It should be tested against duty, consequence, honesty, non-harm, inner clarity, and the wellbeing of affected people.`,
      fifth:
        "Suggested next step: write down who benefits, who may be harmed, what truth is being avoided, what attachment may be influencing the decision, and whether a wiser alternative exists.",
    };
  }

  const reflection = generateReflection();

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

          <a
            href="/"
            className="rounded-full border border-[#e6ded0] bg-white px-4 py-2 text-sm font-semibold text-[#5f3b18]"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-5xl">
          <div className="mb-5 inline-block rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18]">
            Ancient knowledge for modern ethical decisions
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            Vedic Knowledge & Indian Philosophy Repository
          </h1>

          <p className="mt-6 text-xl text-[#5b6472]">
            This section introduces the four Vedas and key Indian philosophical
            lenses in a practical way. The aim is not ritual instruction, but
            ethical reflection: how ancient wisdom can help individuals,
            leaders, educators, and organizations make more responsible
            decisions.
          </p>

          <p className="mt-4 text-lg text-[#5b6472]">
            Use this repository as a reflective companion before decisions that
            affect people, trust, authority, wellbeing, institutions, or the
            future.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            1. The Four Vedas: A Practical Knowledge Base
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The Vedas can be approached as ancient knowledge streams that speak
            to invocation, action, harmony, and welfare. For a modern ethical
            decision-maker, they can be understood as four complementary ways of
            seeing life and responsibility.
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
                  Modern decision use
                </p>
                <p className="mt-2 text-[#5b6472]">{veda.realLifeUse}</p>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-[#5f3b18]">
                  Reflection questions
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#5b6472]">
                  {veda.decisionQuestions.map((question) => (
                    <li key={question}>• {question}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            2. The Vedic Decision Map
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            Before an important decision, ask which Vedic lens is most needed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[#5f3b18]">Rigveda</h3>
              <p className="mt-2 text-sm text-[#5b6472]">
                Clarify intention and respect the larger order.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[#5f3b18]">Yajurveda</h3>
              <p className="mt-2 text-sm text-[#5b6472]">
                Ensure the action and process are disciplined.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[#5f3b18]">Samaveda</h3>
              <p className="mt-2 text-sm text-[#5b6472]">
                Protect harmony, rhythm, communication, and alignment.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[#5f3b18]">Atharvaveda</h3>
              <p className="mt-2 text-sm text-[#5b6472]">
                Protect wellbeing, safety, healing, and vulnerable lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          3. Indian Philosophy Knowledge Base
        </h2>

        <p className="mt-4 max-w-5xl text-lg text-[#5b6472]">
          Indian philosophy offers multiple lenses for reflection. These lenses
          do not give mechanical answers. They help refine perception, clarify
          responsibility, reduce harm, examine evidence, and distinguish wisdom
          from impulse.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {philosophyLenses.map((lens) => (
            <div
              key={lens.name}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2f5d50]">
                {lens.name}
              </h3>

              <p className="mt-3 font-semibold text-[#5f3b18]">
                Key question: {lens.question}
              </p>

              <p className="mt-3 text-[#5b6472]">{lens.meaning}</p>

              <p className="mt-3 text-sm text-[#8a5a2b]">
                Practical use: {lens.practicalUse}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            4. Interactive Indian Philosophy Lens
          </h2>

          <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
            Choose a dilemma and a philosophical lens. The tool will generate a
            reflective decision prompt based purely on Indian philosophical
            ideas such as Dharma, Karma, Ahimsa, Satya, Viveka, Nyaya, Yoga,
            and Vedanta.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-[#5f3b18]">
                Choose a dilemma
              </label>

              <select
                value={dilemma}
                onChange={(e) => setDilemma(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#e6ded0] bg-white p-3"
              >
                {sampleDilemmas.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#5f3b18]">
                Choose a philosophy lens
              </label>

              <select
                value={selectedLens.name}
                onChange={(e) => {
                  const nextLens =
                    philosophyLenses.find(
                      (lens) => lens.name === e.target.value
                    ) || philosophyLenses[0];

                  setSelectedLens(nextLens);
                }}
                className="mt-2 w-full rounded-xl border border-[#e6ded0] bg-white p-3"
              >
                {philosophyLenses.map((lens) => (
                  <option key={lens.name}>{lens.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-7">
            <h3 className="text-2xl font-bold text-[#2f5d50]">
              Reflection Generated
            </h3>

            <div className="mt-5 space-y-4 text-[#5b6472]">
              <p>{reflection.first}</p>
              <p className="font-semibold text-[#5f3b18]">
                {reflection.second}
              </p>
              <p>{reflection.third}</p>
              <p>{reflection.fourth}</p>
              <p className="font-semibold text-[#2f5d50]">
                {reflection.fifth}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            5. Indian Philosophy Ethical Decision Checklist
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Dharma: What is my responsibility in this situation?",
              "Karma: What consequences may follow this action?",
              "Ahimsa: Who may be harmed, directly or indirectly?",
              "Satya: What truth must not be hidden?",
              "Viveka: What must I distinguish more clearly?",
              "Vairagya: What attachment may be distorting my judgment?",
              "Nyaya: Is the reasoning valid and evidence-based?",
              "Yoga: Is my mind steady enough to decide?",
              "Vedanta: What deeper reality or purpose is being ignored?",
              "Samvada: Have I allowed dialogue before conclusion?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#e6ded0] bg-[#fffaf2] p-5 text-[#5f3b18]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            6. How This Connects to The Dharma Protocol
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
            7. For More Information
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
            professional, legal, medical, financial, compliance, employment, or
            human judgment.
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