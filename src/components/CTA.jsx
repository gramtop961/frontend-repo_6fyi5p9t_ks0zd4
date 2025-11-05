import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section id="try" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-600 to-emerald-500 p-8 text-white shadow-xl dark:border-blue-400/20">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-geist text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to search smarter?
              </h3>
              <p className="mt-2 max-w-xl text-white/90">
                Start a free workspace. No credit card required. SOC 2 compliant with SSO.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="h-4 w-4" />
                Security-first by design
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-blue-700 shadow-md ring-1 ring-white/60 transition hover:translate-y-[-1px] hover:bg-blue-50"
            >
              Create your free account
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
