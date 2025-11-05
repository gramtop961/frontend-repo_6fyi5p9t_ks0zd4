import { CheckCircle2, Link2, Search, Upload } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect sources",
    description: "Link your tools in minutes — Drive, Notion, Slack, Confluence, and more.",
  },
  {
    icon: Upload,
    title: "Ingest & index",
    description: "Content is chunked, embedded, and kept in sync automatically.",
  },
  {
    icon: Search,
    title: "Ask anything",
    description: "Natural language queries return precise results with citations.",
  },
  {
    icon: CheckCircle2,
    title: "Share & trust",
    description: "Granular permissions ensure people see only what they should.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-geist text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              A secure, AI-powered pipeline that turns your scattered docs into answers.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((s, idx) => (
                <li key={s.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20 dark:text-blue-200">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-white/10">
                        {idx + 1}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                    </div>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-gray-900">
              <div className="grid grid-cols-3 gap-3">
                {["Drive", "Notion", "Slack", "Confluence", "Dropbox", "Github"].map((name) => (
                  <div
                    key={name}
                    className="flex h-24 flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-gray-800 dark:text-gray-200"
                  >
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                Connectors keep content fresh and access-controlled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
