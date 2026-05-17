import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout — Outermost page shell.
 * Provides the header, centred main content area, and footer.
 * Keeping layout logic here prevents page components from
 * needing to know about viewport constraints.
 */
export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-dvh flex flex-col bg-page">
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-content mx-auto px-4 h-14 flex items-center">
          {/* Logo mark */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7L5.5 10.5L12 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-semibold text-gray-900 text-sm tracking-tight">
              Checklist
            </span>
          </div>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────────── */}
      <main className="flex-1 max-w-content w-full mx-auto px-4 py-8">
        {children}
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="py-5 text-center">
        <p className="text-xs text-gray-400">
          Built with React + TypeScript + Tailwind CSS + Storybook
        </p>
      </footer>
    </div>
  );
};
