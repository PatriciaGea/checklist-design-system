/**
 * Semantic Color Tokens
 *
 * These tokens assign MEANING to raw palette values from primitives.ts.
 * Components must use semantic tokens — never reference palette values directly.
 *
 * Two-layer token architecture:
 *   Primitive (palette)  →  raw values, no context   (e.g. indigo[500] = #6366f1)
 *   Semantic (colors)    →  purpose-driven aliases   (e.g. primary = indigo[500])
 *
 * This separation allows the entire brand to be re-themed by swapping the
 * semantic → primitive mapping without touching any component code.
 */
import { palette } from './primitives';

export const colors = {
  // ── Brand ──────────────────────────────────────────────────
  primary:           palette.indigo[500],
  primaryHover:      palette.indigo[600],
  primaryActive:     palette.indigo[700],
  primaryLight:      palette.indigo[100],
  primaryForeground: palette.indigo.foreground,

  // ── Semantic States ────────────────────────────────────────
  success:           palette.emerald[500],
  successHover:      palette.emerald[600],
  successLight:      palette.emerald[100],

  danger:            palette.red[500],
  dangerHover:       palette.red[600],
  dangerLight:       palette.red[100],

  warning:           palette.amber[500],
  warningHover:      palette.amber[600],
  warningLight:      palette.amber[100],

  // ── Surfaces & Backgrounds ─────────────────────────────────
  bgPage:            palette.cool[50],    // main page canvas
  bgSurface:         palette.white,       // card / panel surfaces

  // ── Text ───────────────────────────────────────────────────
  textPrimary:       palette.gray[900],
  textSecondary:     palette.gray[500],
  textDisabled:      palette.gray[400],

  // ── Borders ────────────────────────────────────────────────
  border:            palette.gray[200],
  borderStrong:      palette.gray[300],
} as const;

export type Colors = typeof colors;
