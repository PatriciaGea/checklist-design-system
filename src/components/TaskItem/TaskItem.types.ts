import type { Task, TaskId } from '../../types/task';

export interface TaskItemProps {
  task: Task;
  onToggle: (id: TaskId) => void;
  onDelete: (id: TaskId) => void;
}
