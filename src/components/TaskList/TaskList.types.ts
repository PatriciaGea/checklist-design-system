import type { Task, TaskId, FilterType, TaskStats } from '../../types/task';

export interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  stats: TaskStats;
  onToggle: (id: TaskId) => void;
  onDelete: (id: TaskId) => void;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}
