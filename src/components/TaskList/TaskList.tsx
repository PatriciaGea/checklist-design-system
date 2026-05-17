import { TaskItem } from '../TaskItem';
import { EmptyState } from '../EmptyState';
import type { TaskListProps } from './TaskList.types';
import type { FilterType } from '../../types/task';
import { filterTasks, capitalize } from '../../utils/taskUtils';
import { cn } from '../../utils/classNames';

const FILTER_OPTIONS: FilterType[] = ['all', 'active', 'completed'];

/**
 * TaskList — Composed list component with filter controls and footer stats.
 *
 * Architecture decisions:
 * - Segmented-control filter uses a pill-shaped container with a sliding
 *   white "active" pill — pure CSS, no JS animation needed.
 * - `aria-label` on the <ul> and `role="list"` make the list semantically
 *   correct even though the default list-style is removed by Tailwind Preflight.
 * - The footer conditionally shows "Clear completed" only when there are
 *   completed tasks, preventing orphaned UI elements.
 */
export const TaskList = ({
  tasks,
  filter,
  stats,
  onToggle,
  onDelete,
  onFilterChange,
  onClearCompleted,
}: TaskListProps) => {
  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div className="flex flex-col">
      {/* ── Filter Segmented Control ─────────────────────────── */}
      <div
        className="flex gap-1 p-1 bg-gray-100 rounded-full mb-4"
        role="tablist"
        aria-label="Filter tasks"
      >
        {FILTER_OPTIONS.map(option => (
          <button
            key={option}
            role="tab"
            aria-selected={filter === option}
            onClick={() => onFilterChange(option)}
            className={cn(
              'flex-1 py-1.5 rounded-full text-sm font-medium',
              'transition-all duration-150',
              'focus-visible:outline-none focus-visible:shadow-focus',
              filter === option
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {capitalize(option)}
          </button>
        ))}
      </div>

      {/* ── Task Items ──────────────────────────────────────── */}
      {visibleTasks.length === 0 ? (
        <EmptyState variant={tasks.length === 0 ? 'empty' : 'filtered'} />
      ) : (
        <ul
          className="divide-y divide-gray-100 rounded-lg overflow-hidden"
          role="list"
          aria-label="Tasks"
        >
          {visibleTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}

      {/* ── Footer ──────────────────────────────────────────── */}
      {stats.total > 0 && (
        <div className="flex items-center justify-between mt-4 px-1">
          <span className="text-xs text-gray-400">
            {stats.active} {stats.active === 1 ? 'task' : 'tasks'} remaining
          </span>
          {stats.completed > 0 && (
            <button
              onClick={onClearCompleted}
              className={cn(
                'text-xs text-gray-400 hover:text-danger',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:underline'
              )}
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};
