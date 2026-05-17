/**
 * Border Radius Design Tokens
 * Consistent rounding creates a cohesive, modern visual language.
 */
export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
