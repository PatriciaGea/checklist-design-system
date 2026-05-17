import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label above the input */
  label?: string;
  /** Error message — switches input to error state */
  error?: string;
  /** Hint text shown below the input */
  helperText?: string;
  /** Icon rendered inside the left edge */
  leftIcon?: ReactNode;
  /** Icon rendered inside the right edge */
  rightIcon?: ReactNode;
  /** Fills container width (default: true) */
  fullWidth?: boolean;
}
