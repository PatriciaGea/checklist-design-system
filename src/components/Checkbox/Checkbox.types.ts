import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text label rendered next to the checkbox */
  label?: string;
  /** Controlled checked state */
  checked?: boolean;
  /** Indeterminate visual state (e.g., "select all" with partial selection) */
  indeterminate?: boolean;
}
