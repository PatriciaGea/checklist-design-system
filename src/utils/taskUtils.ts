import type { Task, FilterType, TaskStats, TaskId } from '../types/task';

/**
 * Generate a cryptographically unique ID for new tasks.
 * crypto.randomUUID() is available in all modern browsers and Node 14.17+.
 */
export const generateId = (): TaskId => crypto.randomUUID();

/**
 * Factory function to create a well-typed Task from raw text input.
 * Centralizing creation logic ensures consistent defaults across the app.
 */
export const createTask = (text: string): Task => ({
  id: generateId(),
  text: text.trim(),
  status: 'active',
  createdAt: Date.now(),
});

/**
 * Filter tasks based on the current active filter.
 * Pure function — easy to unit test and reason about.
 */
export const filterTasks = (tasks: Task[], filter: FilterType): Task[] => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => task.status === 'active');
    case 'completed':
      return tasks.filter(task => task.status === 'completed');
    case 'all':
    default:
      return tasks;
  }
};

/**
 * Sort tasks: active first, then completed. Within each group, newest first.
 * Returns a new array — does not mutate the input.
 */
export const sortTasks = (tasks: Task[]): Task[] =>
  [...tasks].sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === 'active' ? -1 : 1;
    }
    return b.createdAt - a.createdAt;
  });

/**
 * Derive aggregate statistics from a task list.
 */
export const getTaskStats = (tasks: Task[]): TaskStats => ({
  total: tasks.length,
  active: tasks.filter(t => t.status === 'active').length,
  completed: tasks.filter(t => t.status === 'completed').length,
});

/**
 * Capitalize the first letter of a string — used for filter labels.
 */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
