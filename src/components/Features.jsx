import { Database, FileSearch, Lock, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Semantic search",
    description:
      "Understand intent, not just keywords. Retrieve relevant answers from any file format.",
  },
  {
    icon: Database,
    title: "Unified connectors",
    description:
      "Index docs from Drive, Slack, Notion, Confluence, and more with one click.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade security",
    description:
      "SSO/SAML, role-based access, and complete audit trails out of the box.",
  },
  {
    icon: Sparkles,
    title: "AI answers",
    description:
      "Trustworthy summaries with citations so you can verify every response.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-gray-200/70 bg-white dark:border-white/10 dark:bg-black">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-500/5" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-geist text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to find anything
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Built for speed, scale, and security — so your team can stay in flow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-gray-900"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-700 ring-1 ring-blue-600/20 dark:text-blue-200">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
