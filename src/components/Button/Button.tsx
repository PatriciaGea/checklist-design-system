import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
import { cn } from '../../utils/classNames';

/**
 * Variant → Tailwind class map.
 * All classes are complete strings so Tailwind's static scanner can detect them.
 * Never build class names dynamically (e.g. `bg-${variant}`) — they get purged.
 */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary border-primary text-white hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active',
  secondary:
    'bg-white border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100',
  danger:
    'bg-danger border-danger text-white hover:bg-danger-hover hover:border-danger-hover focus-visible:shadow-focus-danger',
  ghost:
    'bg-transparent border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded',
  md: 'h-10 px-4 text-sm rounded-md',
  lg: 'h-12 px-6 text-base rounded-md',
};

/**
 * Button — Primary interactive element in the design system.
 *
 * Architecture decisions:
 * - Variant/size maps use complete Tailwind strings for reliable JIT purging.
 * - Loading spinner sits absolutely so the button never changes dimensions.
 * - Content wrapper fades to opacity-0 during loading (not display:none),
 *   preserving button layout and preventing CLS.
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(
        // Base
        'relative inline-flex items-center justify-center gap-2',
        'font-sans font-medium tracking-wide',
        'border-[1.5px] cursor-pointer select-none whitespace-nowrap overflow-hidden',
        'transition-all duration-150',
        'active:translate-y-px',
        // States
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'focus-visible:outline-none focus-visible:shadow-focus',
        // Variant + Size
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {isLoading && (
        <span
          className="absolute w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          role="status"
          aria-label="Loading"
        />
      )}
      {/* Content wrapper fades out while spinner shows */}
      <span className={cn('inline-flex items-center gap-2', isLoading && 'opacity-0')}>
        {leftIcon && (
          <span className="inline-flex items-center shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className="inline-flex items-center shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </span>
    </button>
  );
};

