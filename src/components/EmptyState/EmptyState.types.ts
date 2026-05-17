import type { ReactNode } from 'react';

export interface EmptyStateProps {
  /** Primary heading */
  title?: string;
  /** Descriptive subtext */
  description?: string;
  /** Optional CTA button rendered below the description */
  action?: ReactNode;
  /** Controls which illustration to show */
  variant?: 'empty' | 'filtered';
}
