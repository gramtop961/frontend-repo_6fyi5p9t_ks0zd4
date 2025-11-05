import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-emerald-500 text-white">R</span>
          retrievo
        </a>
        <nav className="hidden items-center gap-8 text-sm text-gray-600 sm:flex dark:text-gray-300">
          <a className="hover:text-gray-900 dark:hover:text-white" href="#features">Features</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#">Pricing</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#">Docs</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#try">Get started</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 sm:inline dark:text-gray-300 dark:hover:text-white">Sign in</a>
          <a href="#try" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">Try free</a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
