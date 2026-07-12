const prioritySolutions = [
  {
    rank: "01",
    name: "Dharma Agent Firewall",
    shortName: "Agent Firewall",
    problem:
      "Enterprises are moving from chatbots to AI agents that can act, trigger workflows, approve items, send messages, update systems, or initiate transactions.",
    solution:
      "A governance layer that decides whether an AI agent can act automatically, must pause, must ask a human, or must be blocked.",
    whyStrong:
      "This is the cleanest product expression of The Dharma Protocol for the agentic AI era.",
    useCases: [
      "Agent wants to send an email",
      "Agent wants to approve a discount",
      "Agent wants to update CRM records",
      "Agent wants to trigger a workflow",
      "Agent wants to execute a production action",
    ],
  },
  {
    rank: "02",
    name: "AI Procurement Governance Agent",
    shortName: "AI Procurement",
    problem:
      "Companies are buying AI tools quickly, but procurement teams may not fully assess bias, privacy, explainability, vendor dependency, security, and regulatory exposure.",
    solution:
      "An agent that reviews AI vendor proposals and produces risk scores, missing disclosures, vendor questions, required approvals, and contractual safeguards.",
    whyStrong:
      "Clear enterprise pain point, easy MVP, and strong board/compliance relevance.",
    useCases: [
      "Review AI vendor PDF",
      "Classify AI vendor risk",
      "Prepare vendor questions",
      "Flag missing disclosures",
      "Recommend approval or escalation",
    ],
  },
  {
    rank: "03",
    name: "Board Decision Agent",
    shortName: "Board Governance",
    problem:
      "Boards and CXOs face high-stakes decisions around AI, ESG, cyber, compliance, capital allocation, vendors, and people.",
    solution:
      "A boardroom decision assistant that maps assumptions, risks, alternatives, affected stakeholders, uncertainty, and required human judgment.",
    whyStrong:
      "Strong fit with your book, governance positioning, and Independent Director credibility.",
    useCases: [
      "Approve AI vendor",
      "Assess cost-cutting plan",
      "Review customer-service AI deployment",
      "Evaluate strategic risk",
      "Prepare board decision note",
    ],
  },
  {
    rank: "04",
    name: "Telecom NOC Copilot",
    shortName: "Dharma NOC",
    problem:
      "Network operations teams make constant decisions around outages, congestion, alarms, SLA risk, customer impact, and root cause analysis.",
    solution:
      "A Dharma-powered NOC agent that recommends actions, flags low confidence, triggers human review, and creates an auditable operational decision trail.",
    whyStrong:
      "This uses your telecom domain credibility and can become a differentiated industry solution.",
    useCases: [
      "Escalate network alarm",
      "Prioritize impacted site",
      "Check customer impact",
      "Pause auto-healing",
      "Validate RCA confidence",
    ],
  },
  {
    rank: "05",
    name: "AI Incident Response Agent",
    shortName: "AI Incident Response",
    problem:
      "Organizations adopting AI will face incidents such as hallucinated advice, privacy leaks, biased outputs, unauthorized automation, misuse, and customer harm.",
    solution:
      "An agent that classifies incident severity, creates chronology, assigns owners, recommends remediation, and prepares audit-ready incident reports.",
    whyStrong:
      "Emerging enterprise need and a natural module inside MVP Pro.",
    useCases: [
      "Classify AI incident severity",
      "Prepare response checklist",
      "Assign incident owner",
      "Create audit report",
      "Escalate to legal or compliance",
    ],
  },
];

const allSolutions = [
  "Dharma Decision Agent for Boards and CXOs",
  "AI Procurement Governance Agent",
  "Telecom Network Operations Decision Agent",
  "Customer Complaint Resolution Agent",
  "HR Ethical Decision Agent",
  "AI Incident Response Agent",
  "Regulatory Compliance Mapping Agent",
  "Agentic Workflow Governance Layer",
  "Ethical RAG Knowledge Agent",
  "Startup Founder Decision Agent",
  "Legal and Contract Review Agent",
  "Public Policy and Citizen Impact Agent",
];

const engineModules = [
  {
    title: "Decision Classifier",
    text: "Classifies each decision as low, medium, high, or critical risk.",
  },
  {
    title: "Transparency Engine",
    text: "Shows assumptions, reasoning, evidence, sources, missing data, and alternatives.",
  },
  {
    title: "Humility Engine",
    text: "Detects uncertainty, conflict, low confidence, ethical ambiguity, and missing evidence.",
  },
  {
    title: "Pause Gate",
    text: "Decides whether the agent may proceed, pause, escalate, reject, or block.",
  },
  {
    title: "Dialogue Manager",
    text: "Creates questions for the user, reviewer, approver, board, or domain expert.",
  },
  {
    title: "Audit Trace Generator",
    text: "Logs what was asked, what was recommended, what evidence was used, who approved, and why.",
  },
  {
    title: "Policy-as-Code Layer",
    text: "Converts rules, thresholds, approval requirements, and red flags into executable governance logic.",
  },
  {
    title: "Human Review Console",
    text: "Allows humans to approve, reject, modify, override, defer, or escalate decisions.",
  },
];

const decisionConsoleOutputs = [
  "Decision summary",
  "Risk level",
  "Transparency notes",
  "Uncertainty notes",
  "Stakeholder impact",
  "Questions before action",
  "Recommendation: Proceed, Pause, Escalate, or Reject",
  "Audit trail",
];

const verticalTemplates = [
  "Board Governance Template",
  "AI Procurement Template",
  "Telecom NOC Template",
  "HR Fairness Template",
  "AI Incident Template",
  "Compliance Template",
  "Customer Complaint Template",
  "Founder Decision Template",
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Static Product",
    text: "Static agentic solutions portfolio.",
  },
  {
    phase: "Phase 2",
    title: "Dharma Decision Console MVP",
    text: "Users enter decision title, context, stakeholders, potential action, urgency, and risk category.",
  },
  {
    phase: "Phase 3",
    title: "AI-Powered Evaluation",
    text: "Generate risk level, missing information, stakeholder impact, Dharma Pause questions, and proceed/pause/escalate/reject recommendation.",
  },
  {
    phase: "Phase 4",
    title: "Vertical Templates",
    text: "Board level decisions, procurement, telecom, HR, incident, and compliance templates on the same engine.",
  },
  {
    phase: "Phase 5",
    title: "Audit and Human Review",
    text: "Approval status, reviewer notes, downloadable decision note, and audit history.",
  },
];

export default function AgenticSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <header className="border-b border-[#e6ded0] bg-white/90 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="leading-tight">
            <div className="text-xl font-bold text-[#5f3b18]">
              viveka<span className="text-[#2f5d50]">.cloud</span>
            </div>
            <div className="hidden text-xs tracking-[0.18em] text-[#5b6472] sm:block">
              AGENTIC SOLUTIONS
            </div>
          </a>

          <div className="flex gap-3">
            <a
              href="/knowledge"
              className="hidden rounded-full border border-[#e6ded0] bg-white px-4 py-2 text-sm font-semibold text-[#5f3b18] md:inline-block"
            >
              Dharma Repository
            </a>

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
            Governance layer for the agentic AI era
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#5f3b18] md:text-6xl">
            Agentic Solutions Powered by The Dharma Protocol
          </h1>

          <p className="mt-6 text-xl text-[#5b6472]">
            AI is moving from answering questions to taking actions. The Dharma
            Protocol helps enterprises decide when agents can act, when they
            must pause, and when humans must intervene.
          </p>

          <p className="mt-4 text-lg font-semibold text-[#2f5d50]">
            The Dharma Protocol does not replace AI agents. It governs them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            Flagship MVP: Dharma Decision Console
          </h2>

          <p className="mt-4 text-lg text-[#5b6472]">
            The first practical build should be the Dharma Decision Console. A
            user enters a real decision. The system evaluates it through
            transparency, humility, stakeholder impact, uncertainty, and human
            accountability.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#5f3b18]">
                User Input
              </h3>

              <ul className="mt-4 space-y-2 text-[#5b6472]">
                <li>• Decision title</li>
                <li>• Context</li>
                <li>• Stakeholders affected</li>
                <li>• Potential action</li>
                <li>• Documents or policies</li>
                <li>• Urgency</li>
                <li>• Risk category</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#5f3b18]">
                System Output
              </h3>

              <ul className="mt-4 space-y-2 text-[#5b6472]">
                {decisionConsoleOutputs.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#e6ded0] bg-[#fffaf2] p-6">
            <p className="font-semibold text-[#5f3b18]">Example Output</p>
            <p className="mt-3 text-[#5b6472]">
              Decision: Deploy AI chatbot for customer complaints. Risk: High.
              Proceed status: Pause and escalate. Reason: customer harm,
              regulatory exposure, unclear escalation policy, and insufficient
              human override design. Recommended next step: pilot with
              human-in-the-loop and limited scope.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          Best 5 Solutions to Build First
        </h2>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          These are the most practical solutions to prioritize because they
          combine market need, enterprise relevance, your governance
          positioning, and your telecom credibility.
        </p>

        <div className="mt-8 grid gap-6">
          {prioritySolutions.map((solution) => (
            <div
              key={solution.name}
              className="rounded-3xl border border-[#e6ded0] bg-white p-7 shadow-sm"
            >
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#fffaf2] text-2xl font-bold text-[#8a5a2b]">
                  {solution.rank}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-[#5f3b18]">
                        {solution.name}
                      </h3>

                      <p className="mt-1 font-semibold text-[#2f5d50]">
                        {solution.shortName}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#eef5f2] px-4 py-2 text-sm font-semibold text-[#2f5d50]">
                      Priority Solution
                    </span>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="font-semibold text-[#5f3b18]">Problem</p>
                      <p className="mt-2 text-sm text-[#5b6472]">
                        {solution.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#5f3b18]">Solution</p>
                      <p className="mt-2 text-sm text-[#5b6472]">
                        {solution.solution}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#5f3b18]">
                        Why it is strong
                      </p>
                      <p className="mt-2 text-sm text-[#5b6472]">
                        {solution.whyStrong}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {solution.useCases.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#e6ded0] bg-[#fffaf2] px-3 py-1 text-xs text-[#5f3b18]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            Full Agentic Solution Portfolio
          </h2>

          <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
            These solutions can all sit on the same Dharma Protocol Engine. The
            front-end experience changes by domain, but the governance logic
            remains reusable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {allSolutions.map((solution) => (
              <div
                key={solution}
                className="rounded-2xl border border-[#e6ded0] bg-[#fffaf2] p-5 font-semibold text-[#5f3b18]"
              >
                {solution}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          Common Platform: Dharma Protocol Engine
        </h2>

        <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
          This agentic solutions  built on one reusable governance
          engine. This keeps the product scalable, modular, and enterprise
          ready.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {engineModules.map((module) => (
            <div
              key={module.title}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#2f5d50]">
                {module.title}
              </h3>

              <p className="mt-3 text-sm text-[#5b6472]">{module.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-[#d4e4dc] bg-[#eef5f2] p-8">
          <h2 className="text-3xl font-bold text-[#2f5d50]">
            Vertical Templates
          </h2>

          <p className="mt-4 max-w-4xl text-lg text-[#5b6472]">
            These templates reuse the same engine but change
            the input fields, risk rules, examples, and decision outputs.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {verticalTemplates.map((template) => (
              <div
                key={template}
                className="rounded-2xl bg-white p-5 text-sm font-semibold text-[#5f3b18] shadow-sm"
              >
                {template}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-[#5f3b18]">
          Practical Build Roadmap
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {roadmap.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-[#e6ded0] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-[#8a5a2b]">{item.phase}</p>

              <h3 className="mt-3 text-lg font-bold text-[#5f3b18]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#5b6472]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-[#e6ded0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#5f3b18]">
            Product Positioning
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#fffaf2] p-6">
              <p className="font-semibold text-[#8a5a2b]">
                Philosophy-led positioning
              </p>

              <p className="mt-3 text-lg text-[#5b6472]">
                The Dharma Protocol is a governance layer for agentic AI. It
                ensures that autonomous systems do not merely act fast, but act
                transparently, humbly, and in dialogue with human judgment.
              </p>
            </div>

            <div className="rounded-2xl bg-[#eef5f2] p-6">
              <p className="font-semibold text-[#2f5d50]">
                Product-led positioning
              </p>

              <p className="mt-3 text-lg text-[#5b6472]">
                Dharma Protocol helps enterprises deploy AI agents safely by
                deciding when agents can act, when they must pause, and when
                humans must intervene.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:info@viveka.cloud?subject=Agentic Solutions Inquiry"
              className="inline-block rounded-full bg-[#8a5a2b] px-6 py-3 font-semibold text-white"
            >
              Discuss Agentic Solutions
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e6ded0] bg-[#fffaf2] px-6 py-10 text-sm text-[#5b6472]">
        <div className="mx-auto max-w-7xl">
          <p>
            Agentic Solutions by Viveka Cloud are decision-support and
            governance-support concepts. They do not replace legal, financial,
            compliance, employment, medical, professional, board, or human
            judgment.
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