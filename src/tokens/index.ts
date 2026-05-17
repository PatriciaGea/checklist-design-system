/**
 * Token barrel export — import all tokens from a single entry point:
 *   import { palette, colors, spacing, typography } from '@tokens';
 *
 * Two-layer architecture:
 *   palette  → primitive tokens (raw values, no meaning)
 *   colors   → semantic tokens  (purpose-driven aliases over palette)
 */
export * from './primitives';
export * from './colors';
export * from './spacing';
export * from './typography';
export * from './borderRadius';
export * from './shadows';
export * from './transitions';
