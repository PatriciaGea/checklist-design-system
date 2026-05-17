import type { CardProps, CardVariant, CardPadding } from './Card.types';
import { cn } from '../../utils/classNames';

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: 'bg-surface border border-gray-200 shadow-xs',
  elevated: 'bg-surface border-transparent shadow-md',
  outlined: 'bg-surface border border-gray-200 shadow-none',
  ghost: 'bg-transparent border-transparent shadow-none',
};

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Card — Surface container that groups related content.
 * Supports static and interactive (hover-lift) variants.
 */
export const Card = ({
  variant = 'default',
  padding = 'md',
  interactive = false,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      tabIndex={interactive ? 0 : undefined}
      className={cn(
        'rounded-xl border transition-all duration-150',
        VARIANT_CLASSES[variant],
        PADDING_CLASSES[padding],
        interactive &&
          'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:shadow-focus',
        className
      )}
    >
      {children}
    </div>
  );
};

