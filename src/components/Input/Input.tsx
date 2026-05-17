import { forwardRef, useId } from 'react';
import type { InputProps } from './Input.types';
import { cn } from '../../utils/classNames';

/**
 * Input — Text field with label, icons, helper text, and error state.
 *
 * Architecture decisions:
 * - useId() generates stable IDs for label→input association (WCAG 1.3.1).
 * - aria-invalid + aria-describedby lets screen readers announce errors.
 * - The peer modifier on the hidden Tailwind border trick is avoided in favour
 *   of direct className logic for explicit, readable state management.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className,
  id: externalId,
  ...props
}, ref) {
  const generatedId = useId();
  const id = externalId ?? generatedId;
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  const describedBy = [error ? errorId : null, helperText ? helperId : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span
            className="absolute left-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          ref={ref}
          id={id}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy || undefined}
          className={cn(
            'w-full h-10 px-3 bg-white',
            'border-[1.5px] border-gray-200 rounded-md',
            'text-sm text-gray-900 placeholder:text-gray-400',
            'transition-all duration-150 outline-none',
            'hover:border-gray-300',
            'focus:border-primary focus:shadow-focus',
            'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
            error &&
              'border-danger hover:border-danger focus:border-danger focus:shadow-focus-danger',
            !!leftIcon && 'pl-10',
            !!rightIcon && 'pr-10',
            className
          )}
        />

        {rightIcon && (
          <span
            className="absolute right-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span id={errorId} className="text-xs text-danger" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={helperId} className="text-xs text-gray-500">
          {helperText}
        </span>
      )}
    </div>
  );
});

