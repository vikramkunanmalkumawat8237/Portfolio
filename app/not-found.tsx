import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-void px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald">ACCT / 404 — NOT FOUND</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        This entry doesn't reconcile.
      </h1>
      <p className="max-w-sm text-sm text-ink-muted">
        The page you're looking for isn't on the ledger. Let's get you back to the balance sheet.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-emerald px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-emerald-bright"
      >
        Back to Home
      </Link>
    </div>
  );
}
