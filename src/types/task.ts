/**
 * Core domain types for the Checklist application.
 *
 * Architecture decision: Centralizing types in /types prevents circular
 * dependencies and makes it trivial to share types across components,
 * hooks, and utilities without coupling them.
 */

/** Opaque string ID for type safety — prevents mixing IDs from different entities */
export type TaskId = string;

export type TaskStatus = 'active' | 'completed';

export interface Task {
  id: TaskId;
  text: string;
  status: TaskStatus;
  createdAt: number;  // Unix timestamp (ms)
  completedAt?: number;
}

/** Controls which subset of tasks is visible in the task list */
export type FilterType = 'all' | 'active' | 'completed';

/** Aggregated statistics used in the UI footer / header badge */
export interface TaskStats {
  total: number;
  active: number;
  completed: number;
}
