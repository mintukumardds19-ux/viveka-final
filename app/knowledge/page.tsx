export default function KnowledgePage() {
  const principles = [
    {
      title: "Transparency",
      text: "A decision that matters must leave a trace. The Dharma Protocol asks: What was considered, what evidence was used, what assumptions were made, and who can audit the final outcome?",
    },
    {
      title: "Humility",
      text: "AI must know when not to proceed. When evidence is weak, ambiguous, conflicting, or the decision is high-impact, the system must pause, disclose uncertainty, and seek human input.",
    },
    {
      title: "Dialogue",
      text: "Responsible intelligence is not a one-way answer. Human correction, clarification, disagreement, and feedback must shape the final decision and improve future judgment.",
    },
  ];

  const pauseLevels = [
    {
      level: "Level 0 — Proceed",
      meaning: "Low-risk informational or creative tasks where no meaningful consequence is created.",
      example: "Summarizing a public article or drafting a non-binding note.",
    },
    {
      level: "Level 1 — Proceed with Disclosure",
      meaning: "The system may answer, but must clearly state assumptions, limits, or uncertainty.",
      example: "Giving a general recommendation where evidence is incomplete.",
    },
    {
      level: "Level 2 — Confirm",
      meaning: "The decision may affect people, money, operations, or reputation, so human confirmation is required.",
      example: "Approving a change in a team process or customer-facing response.",
    },
    {
      level: "Level 3 — Escalate",
      meaning: "A higher authority or domain expert must review before action.",
      example: "HR, legal, financial, healthcare, security, or production-system decisions.",
    },
    {
      level: "Level 4 — Block",
      meaning: "The action is unsafe, unauthorized, unlawful, harmful, or outside the system’s authority.",
      example: "Sharing sensitive data, executing irreversible action, or bypassing human approval.",
    },
  ];

  const decisionFramework = [
    "What exactly is being decided?",
    "Who will benefit from this decision?",
    "Who may silently bear the cost?",
    "Is the decision reversible?",
    "What evidence supports the decision?",
    "What evidence is missing or conflicting?",
    "What is the short-term gain?",
    "What is the long-term risk?",
    "Who has the authority to approve?",
    "Should this proceed, pause, escalate, or be rejected?",
  ];

  const uncertaintyTypes = [
    {
      title: "Knowledge Gap",
      text: "Important information is missing. The right response is to ask for more context instead of guessing.",
    },
    {
      title: "Ambiguity",
      text: "The request can be interpreted in more than one way. The system should clarify intent before recommending action.",
    },
    {
      title: "Evidence Conflict",
      text: "Available sources disagree. The system should reveal the conflict and avoid false certainty.",
    },
    {
      title: "Out-of-Domain",
      text: "The question falls outside the system’s capability or authority. The system should decline, route, or escalate.",
    },
    {
      title: "Policy Uncertainty",
      text: "Rules or governance policies are unclear. The decision should pause until the policy authority resolves it.",
    },
    {
      title: "Environmental Uncertainty",
      text: "The external situation is changing quickly. Human review becomes more important.",
    },
  ];

  const useCases = [
    {
      title: "AI Governance",
      question: "Should we allow AI to automate this workflow?",
      dharmaUse:
        "Check explainability, data responsibility, human oversight, rollback ability, bias risk, and escalation requirements.",
    },
    {
      title: "Leadership Decisions",
      question: "Should we reduce team size to improve cost efficiency?",
      dharmaUse:
        "Map visible and hidden stakeholders, assess dignity, morale, long-term capability loss, and alternatives before action.",
    },
    {
      title: "Education",
      question: "Should AI rank children based on learning speed?",
      dharmaUse:
        "Evaluate psychological safety, fairness, dignity, developmental diversity, and harm caused by comparison.",
    },
    {
      title: "Personal Decisions",
      question: "Should I leave a stable job to pursue a meaningful project?",
      dharmaUse:
        "Clarify intention, reversibility, family impact, financial runway, regret risk, and phased alternatives.",
    },
    {
      title: "Corporate Governance",
      question: "Should a board approve an AI project it does not fully understand?",
      dharmaUse:
        "Require transparency, risk classification, auditability, accountability, model limitations, and human approval structures.",
    },
    {
      title: "Technology Operations",
      question: "Should AI directly execute a production system change?",
      dharmaUse:
        "Pause before execution, verify rollback, validate authority, assess systemic impact, and require logged approval.",
    },
  ];

  const redFlags = [
    "The decision is irreversible.",
    "The affected people are not represented in the discussion.",
    "The AI sounds very confident but does not show evidence.",
    "The system is acting faster than humans can understand.",
    "No one is clearly accountable for the outcome.",
    "The decision affects children, employees, patients, customers, citizens, or vulnerable groups.",
    "There is no rollback plan.",
    "There is no audit trail.",
    "The benefit is immediate but the harm may appear later.",
    "The decision transfers authority from humans to automation without explicit approval.",
  ];

  const templates = [
    {
      title: "Dharma Decision Note",
      items: [
        "Decision under consideration:",
        "Why this decision matters:",
        "Stakeholders affected:",
        "Evidence available:",
        "Evidence missing:",
        "Short-term benefit:",
        "Long-term risk:",
        "Reversibility:",
        "Human authority required:",
        "Recommended action:",
      ],
    },
    {
      title: "Pause Gate Review",
      items: [
        "Is this decision low, medium, high, or critical risk?",
        "Is there uncertainty?",
        "Is the decision reversible?",
        "Does this affect people’s rights, dignity, livelihood, safety, or trust?",
        "Can the AI explain its reasoning in human-legible terms?",
        "Should this proceed, ask, confirm, escalate, or block?",
      ],
    },
    {
      title: "Human-in-the-Loop Checklist",
      items: [
        "Who is the final accountable human?",
        "Who can approve?",
        "Who can reject?",
        "Who can override?",
        "What must be logged?",
        "What must be reviewed later?",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <header className="border-b border-[#e6ded0] bg-white/90 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-3">
           

            <div className="leading-tight">
              <div className="text-xl font-bold text-[#5f3b18]">
                viveka<span className="text-[#2f5d50]">.cloud</span>
              </div>
              <div className="hidden text-xs tracking-[0.18em] text-[#5b6472] sm:block">
                KNOWLEDGE REPOSITORY
              </div>
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
        <div className="max-w-4xl">
          <div className="mb-5 inline-block rounded-full border border-[#e6ded0] bg-[#fffaf2] px-4 py-2 text-sm text-[#5f3b18]">
            Practical wisdom for ethical decisions
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            The Dharma Protocol Knowledge Repository
          </h1>

          <p className="mt-6 text-xl text-[#5b6472]">
            This repository helps users apply The Dharma Protocol to real-life
            ethical decisions. It is designed for individuals, leaders,
            educators, boards, builders, and AI teams who want decisions to be
            transparent, humble, accountable, and human-governed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            1. What is The Dharma Protocol?
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The Dharma Protocol is a decision-intelligence framework. It helps
            humans and AI systems examine the movement from intelligence to
            consequence. It does not replace human judgment. Instead, it
            structures the relationship between AI capability, human authority,
            ethical responsibility, and real-world impact.
          </p>

          <p className="mt-4 text-lg text-[#5b6472]">
            Its central belief is simple: a decision is not good merely because
            it is fast, efficient, or intelligent. A decision must also be
            visible, accountable, fair, reversible where possible, and aligned
            with long-term responsibility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          2. The Three Principles
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2f5d50]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#5b6472]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            3. The Pause Before Power Doctrine
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The core operational idea of The Dharma Protocol is pause. When a
            decision can affect people, systems, institutions, or society, AI
            must not move directly from reasoning to execution. It must pause,
            surface uncertainty, explain risks, and clarify human authority.
          </p>

          <p className="mt-4 text-lg font-semibold text-[#2f5d50]">
            Intelligence should not outrun accountability.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {pauseLevels.map((item) => (
            <div
              key={item.level}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#5f3b18]">
                {item.level}
              </h3>
              <p className="mt-3 text-[#5b6472]">{item.meaning}</p>
              <p className="mt-3 text-sm text-[#8a5a2b]">
                Example: {item.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          4. Real-Life Ethical Decision Framework
        </h2>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          Use these questions before making any decision that affects people,
          money, authority, trust, safety, children, employees, customers,
          citizens, or institutional reputation.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {decisionFramework.map((question, index) => (
            <div
              key={question}
              className="rounded-xl border border-[#e6ded0] bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-[#5f3b18]">
                {index + 1}. {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          5. Understanding Uncertainty
        </h2>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          Ethical risk increases when a system hides uncertainty. The Dharma
          Protocol asks users to identify why a decision may be uncertain before
          acting.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {uncertaintyTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2f5d50]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#5b6472]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          6. Real-Life Use Cases
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#5f3b18]">
                {item.title}
              </h3>

              <p className="mt-3 font-semibold text-[#2f5d50]">
                Question: {item.question}
              </p>

              <p className="mt-3 text-[#5b6472]">{item.dharmaUse}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            7. Red Flags Before Any Decision
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            When any of these signs appear, slow down. The decision may need
            pause, review, or escalation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {redFlags.map((flag) => (
              <div
                key={flag}
                className="rounded-xl border border-[#e6ded0] bg-[#fffaf2] p-4 text-[#5f3b18]"
              >
                {flag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          8. Practical Templates
        </h2>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          These templates can be copied into meetings, board notes, AI
          governance reviews, project approvals, personal reflections, or
          institutional decision records.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2f5d50]">
                {template.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-[#5b6472]">
                {template.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            9. The Dharma Decision Formula
          </h2>

          <p className="mt-4 text-xl font-semibold text-[#5f3b18]">
            A responsible decision = clear intent + visible evidence + honest
            uncertainty + stakeholder awareness + human accountability.
          </p>

          <p className="mt-4 text-lg text-[#5b6472]">
            If any part of this formula is missing, the decision should pause.
            The goal is not to slow every decision. The goal is to ensure that
            consequential decisions do not become invisible, overconfident, or
            unaccountable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            10. For More Information
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The Dharma Protocol is evolving as a practical framework for
            responsible decision intelligence. For access requests, project
            updates, collaboration, or relevant queries, write to{" "}
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
            The Knowledge Repository is for reflection, education, and
            decision-support. It does not replace legal, medical, financial,
            compliance, employment, professional, or human judgment.
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