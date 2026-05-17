import type { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types';
import { cn } from '../../utils/classNames';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: 'bg-primary-light text-primary-hover',
  success: 'bg-success-light text-success-hover',
  danger: 'bg-danger-light text-danger-hover',
  warning: 'bg-warning-light text-warning-hover',
  neutral: 'bg-gray-100 text-gray-600',
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

/**
 * Badge — Compact inline label for status, counts, and categories.
 */
export const Badge = ({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium tracking-wide whitespace-nowrap leading-none',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" aria-hidden="true" />
      )}
      {children}
    </span>
  );
};

