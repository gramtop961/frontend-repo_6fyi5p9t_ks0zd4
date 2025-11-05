import { Rocket, Search, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_500px_at_-20%_20%,rgba(16,185,129,0.2),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/50 bg-blue-500/10 px-3 py-1 text-sm text-blue-700 dark:text-blue-200">
              <Zap className="h-4 w-4" />
              <span>Lightning-fast document retrieval</span>
            </div>

            <h1 className="font-geist text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Find the right document in seconds
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Empower your team with AI-accelerated search across files, wikis, and knowledge bases. Secure, accurate, and built for enterprise scale.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#try"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-700/50 transition hover:translate-y-[-1px] hover:bg-blue-500"
              >
                <Rocket className="h-5 w-5" />
                Start for free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/70 px-5 py-3 font-medium text-gray-900 backdrop-blur ring-1 ring-gray-200 transition hover:bg-white dark:bg-white/5 dark:text-white dark:ring-white/10"
              >
                <Search className="h-5 w-5" />
                See how it works
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 text-left">
              <div>
                <dt className="text-2xl font-semibold text-gray-900 dark:text-white">10x</dt>
                <dd className="text-sm text-gray-600 dark:text-gray-300">Faster discovery</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-gray-900 dark:text-white">99.99%</dt>
                <dd className="text-sm text-gray-600 dark:text-gray-300">SLA uptime</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-gray-900 dark:text-white">SOC 2</dt>
                <dd className="text-sm text-gray-600 dark:text-gray-300">Security compliant</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl border border-white/20 bg-white/50 p-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3 rounded-lg bg-gray-900 px-4 py-3 text-gray-300">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-gray-400">Search Console</span>
              </div>
              <div className="relative mt-4 rounded-lg border border-gray-200/60 bg-white p-4 dark:border-white/10 dark:bg-gray-900">
                <div className="mb-3 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-700 dark:border-white/10 dark:bg-gray-800 dark:text-gray-200">
                  <Search className="h-4 w-4" />
                  <input
                    aria-label="Search"
                    placeholder="Search across 10,000+ docs..."
                    className="w-full bg-transparent outline-none placeholder:text-gray-400"
                  />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="rounded-md bg-blue-50 p-3 text-blue-900 ring-1 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-100 dark:ring-blue-400/20">
                    Query: Onboarding checklist → Best match: Company Wiki / HR / Onboarding
                  </li>
                  <li className="rounded-md bg-gray-50 p-3 text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800/80 dark:text-gray-200 dark:ring-white/10">
                    Query: Incident response → Best match: Playbooks / Security / IR-101
                  </li>
                  <li className="rounded-md bg-gray-50 p-3 text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800/80 dark:text-gray-200 dark:ring-white/10">
                    Query: Q3 roadmap → Best match: Product / Roadmaps / 2025-Q3
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="h-4 w-4" />
                End-to-end encryption. Your data stays yours.
              </div>
            </div>

            <div className="absolute -left-10 -top-10 -z-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 -z-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
