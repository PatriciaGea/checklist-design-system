import { useState, useRef, type FormEvent, type KeyboardEvent } from 'react';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { TaskList } from '../../components/TaskList';
import { useTasks } from '../../hooks/useTasks';
import { useFilter } from '../../hooks/useFilter';
import { getTaskStats } from '../../utils/taskUtils';
import type { Task } from '../../types/task';

/** Pre-loaded sample tasks so the app starts with useful content */
const INITIAL_TASKS: Task[] = [
  {
    id: 'sample-1',
    text: 'Explore the Storybook component library',
    status: 'active',
    createdAt: Date.now() - 4000,
  },
  {
    id: 'sample-2',
    text: 'Review the design tokens in src/tokens/',
    status: 'active',
    createdAt: Date.now() - 3000,
  },
  {
    id: 'sample-3',
    text: 'Add a new task using the input above',
    status: 'completed',
    createdAt: Date.now() - 2000,
    completedAt: Date.now() - 1000,
  },
];

/**
 * ChecklistPage — The application's single page.
 *
 * Composes useTasks + useFilter hooks with UI components.
 * Deliberately thin: business logic lives in hooks, UI logic in components.
 */
export const ChecklistPage = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks(INITIAL_TASKS);
  const { filter, changeFilter } = useFilter();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const stats = getTaskStats(tasks);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue('');
    inputRef.current?.focus();
  };

  // Also submit on Enter (Input already does this via form, but explicit for clarity)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit(e as unknown as FormEvent);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">My Tasks</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {stats.active === 0 && stats.total > 0
              ? 'All tasks completed 🎉'
              : `${stats.active} remaining`}
          </p>
        </div>
        {stats.total > 0 && (
          <Badge variant={stats.active === 0 ? 'success' : 'primary'} dot={stats.active === 0}>
            {stats.completed}/{stats.total} done
          </Badge>
        )}
      </div>

      {/* ── Add Task Form ────────────────────────────────────── */}
      <Card variant="elevated" padding="sm">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task…"
            aria-label="New task description"
            autoComplete="off"
            fullWidth
          />
          <Button
            type="submit"
            disabled={!inputValue.trim()}
            aria-label="Add task"
            className="shrink-0"
          >
            Add
          </Button>
        </form>
      </Card>

      {/* ── Task List ────────────────────────────────────────── */}
      <Card variant="elevated" padding="none">
        <div className="p-4 pb-0">
          <TaskList
            tasks={tasks}
            filter={filter}
            stats={stats}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onFilterChange={changeFilter}
            onClearCompleted={clearCompleted}
          />
        </div>
        <div className="h-4" />
      </Card>
    </div>
  );
};
