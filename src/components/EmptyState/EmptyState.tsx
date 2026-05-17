import type { EmptyStateProps } from './EmptyState.types';

/**
 * EmptyState — Displayed when no tasks exist or no tasks match the active filter.
 *
 * Two variants:
 *  - `empty`    — no tasks at all (clipboard + plus illustration)
 *  - `filtered` — tasks exist but none match the filter (search / no-results)
 */
export const EmptyState = ({
  title,
  description,
  action,
  variant = 'empty',
}: EmptyStateProps) => {
  const defaultTitle = variant === 'empty' ? 'No tasks yet' : 'No matching tasks';
  const defaultDescription =
    variant === 'empty'
      ? 'Add your first task above to get started.'
      : 'Try switching to a different filter.';

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Illustration */}
      <div className="mb-5 text-gray-300" aria-hidden="true">
        {variant === 'empty' ? <EmptyIllustration /> : <FilteredIllustration />}
      </div>

      <h3 className="text-base font-semibold text-gray-700 mb-1">
        {title ?? defaultTitle}
      </h3>
      <p className="text-sm text-gray-400 max-w-xs">{description ?? defaultDescription}</p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

/* ── Inline SVG Illustrations ─────────────────────────────── */

const EmptyIllustration = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
    {/* Clipboard body */}
    <rect x="10" y="16" width="52" height="48" rx="6" fill="#e0e7ff" />
    <rect x="10" y="16" width="52" height="48" rx="6" stroke="#a5b4fc" strokeWidth="2" />
    {/* Clipboard clip */}
    <path
      d="M28 12h16a4 4 0 0 1 4 4H24a4 4 0 0 1 4-4z"
      fill="#6366f1"
    />
    {/* Lines */}
    <line x1="22" y1="32" x2="50" y2="32" stroke="#c7d2fe" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="40" x2="44" y2="40" stroke="#c7d2fe" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="48" x2="38" y2="48" stroke="#c7d2fe" strokeWidth="2.5" strokeLinecap="round" />
    {/* Plus badge */}
    <circle cx="54" cy="54" r="10" fill="#6366f1" />
    <line x1="54" y1="49" x2="54" y2="59" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="49" y1="54" x2="59" y2="54" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const FilteredIllustration = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
    {/* Search circle */}
    <circle cx="32" cy="32" r="18" fill="#e0e7ff" stroke="#a5b4fc" strokeWidth="2" />
    {/* Search glass handle */}
    <line x1="45" y1="45" x2="58" y2="58" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round" />
    {/* X inside circle */}
    <line x1="26" y1="26" x2="38" y2="38" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="26" x2="26" y2="38" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
