import { useState, useCallback } from 'react';
import type { FilterType } from '../types/task';

/**
 * useFilter — Manages the active filter selection for the task list.
 *
 * Extracted into its own hook to keep filter logic composable and
 * independently testable from the task CRUD operations.
 */
export const useFilter = (initialFilter: FilterType = 'all') => {
  const [filter, setFilter] = useState<FilterType>(initialFilter);

  const changeFilter = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
  }, []);

  return { filter, changeFilter };
};
