import { useId } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { cn } from '../../utils/classNames';

/**
 * Checkbox — Accessible custom-styled checkbox with animated checkmark.
 *
 * Architecture decisions:
 * - Native <input type="checkbox"> is visually hidden (sr-only) but stays in
 *   the DOM — screen readers and keyboard navigation work without custom ARIA.
 * - Tailwind `peer` modifier connects input focus state to the visual box:
 *   `peer-focus-visible:shadow-focus` on the sibling span.
 * - The SVG checkmark uses `checkbox-mark` / `checkbox-mark-active` custom
 *   classes (defined in global.css @layer components) for stroke-dashoffset
 *   animation that can't be expressed with Tailwind utilities alone.
 */
export const Checkbox = ({
  label,
  checked = false,
  indeterminate = false,
  disabled,
  className,
  id: externalId,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const isActive = checked || indeterminate;

  return (
    <label
      htmlFor={id}
      className={cn(
        'inline-flex items-center gap-3 cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {/* Visually hidden native input — preserves all native a11y behaviour */}
      <input
        {...props}
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        className="sr-only peer"
      />

      {/* Custom visual checkbox — peer modifiers react to input focus/state */}
      <span
        className={cn(
          'shrink-0 w-5 h-5 rounded flex items-center justify-center',
          'border-2 transition-all duration-150',
          'peer-focus-visible:shadow-focus',
          isActive
            ? 'bg-primary border-primary'
            : 'bg-white border-gray-300 hover:border-primary'
        )}
        aria-hidden="true"
      >
        {indeterminate ? (
          <svg className="w-[11px] overflow-visible" viewBox="0 0 11 2">
            <line
              x1="1"
              y1="1"
              x2="10"
              y2="1"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="w-[11px] h-[9px] overflow-visible" viewBox="0 0 11 9">
            <path
              className={cn('checkbox-mark', checked && 'checkbox-mark-active')}
              d="M1 4.5L4 7.5L10 1"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}
      </span>

      {label && (
        <span
          className={cn(
            'text-sm text-gray-900 transition-colors duration-150',
            checked && 'text-gray-400 line-through decoration-gray-300'
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

