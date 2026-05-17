/**
 * cn — Conditional class name joiner.
 *
 * Lightweight alternative to `clsx` / `classnames` for this project.
 * Filters out falsy values (false, null, undefined) and joins with spaces.
 *
 * @example
 *   cn('btn', isActive && 'btn--active', undefined)
 *   // => 'btn btn--active'
 */
export const cn = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(' ');
