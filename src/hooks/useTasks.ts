import { useState, useCallback, useEffect } from 'react';
import type { Task, TaskId } from '../types/task';
import { createTask } from '../utils/taskUtils';

const STORAGE_KEY = 'checklist-tasks';

/**
 * useTasks — Core state management hook for the checklist.
 *
 * Architecture decisions:
 * - All CRUD operations are useCallback-wrapped to maintain referential stability
 *   and prevent unnecessary re-renders in child components.
 * - localStorage persistence keeps tasks across page reloads.
 * - The initializer function in useState lazily reads from storage to avoid
 *   accessing localStorage on every render cycle.
 */
export const useTasks = (initialTasks: Task[] = []) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as Task[];
    } catch {
      // localStorage may be unavailable (e.g., private browsing restrictions)
    }
    return initialTasks;
  });

  // Sync task state to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // Silently fail if storage quota exceeded
    }
  }, [tasks]);

  /** Add a new task. Ignores empty / whitespace-only input. */
  const addTask = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks(prev => [createTask(trimmed), ...prev]);
  }, []);

  /** Toggle a task between active and completed. */
  const toggleTask = useCallback((id: TaskId) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'active' ? 'completed' : 'active',
              completedAt: task.status === 'active' ? Date.now() : undefined,
            }
          : task
      )
    );
  }, []);

  /** Permanently remove a task by ID. */
  const deleteTask = useCallback((id: TaskId) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  /** Remove all completed tasks in one operation. */
  const clearCompleted = useCallback(() => {
    setTasks(prev => prev.filter(task => task.status === 'active'));
  }, []);

  return { tasks, addTask, toggleTask, deleteTask, clearCompleted };
};
