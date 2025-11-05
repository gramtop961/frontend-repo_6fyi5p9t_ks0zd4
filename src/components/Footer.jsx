export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-sm text-gray-600 dark:border-white/10 dark:bg-black dark:text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="font-semibold text-gray-900 dark:text-white">retrievo</div>
        <nav className="flex items-center gap-6">
          <a className="hover:text-gray-900 dark:hover:text-white" href="#features">Features</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#">Pricing</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#">Docs</a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#">Security</a>
        </nav>
        <div className="text-gray-500">© {year} Retrievo, Inc.</div>
      </div>
    </footer>
  );
}
