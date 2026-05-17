import { Checkbox } from '../Checkbox';
import type { TaskItemProps } from './TaskItem.types';
import { cn } from '../../utils/classNames';

/**
 * TaskItem — Single row in the task list.
 *
 * Architecture decisions:
 * - Delete button uses `opacity-0 group-hover:opacity-100` so it only
 *   appears on hover, keeping the UI clean without sacrificing discoverability.
 * - The delete button is always focusable (keyboard users can still Tab to it),
 *   but gets a visible focus ring independent of the hover state.
 * - `aria-label` on the delete button provides full context for screen readers.
 */
export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const isCompleted = task.status === 'completed';

  return (
    <li
      className={cn(
        'group flex items-center gap-3 px-4 py-3',
        'border-b border-gray-100 last:border-b-0',
        'transition-colors duration-150',
        'hover:bg-gray-50',
        isCompleted && 'bg-gray-50/50'
      )}
    >
      {/* Checkbox toggles completion */}
      <Checkbox
        checked={isCompleted}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.text}" as ${isCompleted ? 'active' : 'completed'}`}
      />

      {/* Task text */}
      <span
        className={cn(
          'flex-1 text-sm leading-relaxed',
          'transition-all duration-200',
          isCompleted
            ? 'text-gray-400 line-through decoration-gray-300'
            : 'text-gray-800'
        )}
      >
        {task.text}
      </span>

      {/* Delete button — hidden until hover, always keyboard reachable */}
      <button
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.text}`}
        title="Delete task"
        className={cn(
          'flex items-center justify-center w-7 h-7 rounded-md',
          'text-gray-300 transition-all duration-150',
          'opacity-0 group-hover:opacity-100',
          'hover:bg-danger-light hover:text-danger',
          'focus-visible:opacity-100 focus-visible:outline-none focus-visible:shadow-focus-danger',
          'shrink-0'
        )}
      >
        <TrashIcon />
      </button>
    </li>
  );
};

const TrashIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5.5 1h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM2 3.5A.5.5 0 0 1 2.5 3h10a.5.5 0 0 1 0 1H12l-.9 8.1A1.5 1.5 0 0 1 9.6 13.5H5.4A1.5 1.5 0 0 1 3.9 12.1L3 4H2.5A.5.5 0 0 1 2 3.5z"
      fill="currentColor"
    />
  </svg>
);
