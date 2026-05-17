/**
 * Primitive Design Tokens — Raw Color Palette
 *
 * These are the lowest-level tokens: raw values with no meaning attached.
 * They should NOT be used directly in components — use semantic tokens from
 * colors.ts instead. Primitive tokens are the "source of truth" that semantic
 * tokens reference.
 *
 * Naming convention: palette.[hue][shade]
 * Shades follow the Tailwind CSS scale (50–900).
 */
export const palette = {
  indigo: {
    100: '#e0e7ff',
    200: '#c7d2fe',
    400: '#818cf8',
    500: '#6366f1', // → color-primary
    600: '#4f46e5', // → color-primary-hover
    700: '#4338ca', // → color-primary-active
    foreground: '#ffffff',
  },
  emerald: {
    100: '#d1fae5',
    500: '#10b981', // → color-success
    600: '#059669', // → color-success-hover
  },
  red: {
    100: '#fee2e2',
    500: '#ef4444', // → color-danger
    600: '#dc2626', // → color-danger-hover
  },
  amber: {
    100: '#fef3c7',
    500: '#f59e0b', // → color-warning
    600: '#d97706', // → color-warning-hover
  },
  gray: {
    50:  '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb', // → color-border
    300: '#d1d5db', // → color-border-strong
    400: '#9ca3af', // → color-text-disabled
    500: '#6b7280', // → color-text-secondary
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827', // → color-text-primary
  },
  // Off-white page background — slightly cooler than pure white
  cool: {
    50: '#f0f2f5', // → color-bg-page
  },
  white: '#ffffff', // → color-bg-surface
  black: '#000000',
} as const;

export type Palette = typeof palette;
