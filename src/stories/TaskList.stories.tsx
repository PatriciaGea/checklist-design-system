import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from '../components/TaskList';
import type { Task, FilterType } from '../types/task';
import { getTaskStats } from '../utils/taskUtils';

const sampleTasks: Task[] = [
  { id: '1', text: 'Design the component library', status: 'completed', createdAt: Date.now() - 3000, completedAt: Date.now() - 1000 },
  { id: '2', text: 'Set up Storybook with all stories', status: 'active', createdAt: Date.now() - 2000 },
  { id: '3', text: 'Write unit tests for hooks', status: 'active', createdAt: Date.now() - 1000 },
  { id: '4', text: 'Deploy to production', status: 'active', createdAt: Date.now() },
];

const meta: Meta<typeof TaskList> = {
  title: 'Features/TaskList',
  component: TaskList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '**Feature-level** composite component. Combines `TaskItem` rows with a segmented filter control (`all` / `active` / `completed`), a live statistics footer, and an `EmptyState` fallback. Manages filtering logic internally via `filterTasks()` util, keeping the page-level component thin.',
      },
    },
  },
  decorators: [Story => <div className="max-w-md"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const WithTasks: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tasks, setTasks] = useState(sampleTasks);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filter, setFilter] = useState<FilterType>('all');

    const toggle = (id: string) =>
      setTasks(prev =>
        prev.map(t =>
          t.id === id ? { ...t, status: t.status === 'active' ? 'completed' : 'active' } : t
        )
      );
    const remove = (id: string) => setTasks(prev => prev.filter(t => t.id !== id));
    const clearCompleted = () => setTasks(prev => prev.filter(t => t.status === 'active'));

    return (
      <TaskList
        tasks={tasks}
        filter={filter}
        stats={getTaskStats(tasks)}
        onToggle={toggle}
        onDelete={remove}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
    );
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
    filter: 'all',
    stats: { total: 0, active: 0, completed: 0 },
    onToggle: () => {},
    onDelete: () => {},
    onFilterChange: () => {},
    onClearCompleted: () => {},
  },
};

export const AllCompleted: Story = {
  args: {
    tasks: sampleTasks.map(t => ({ ...t, status: 'completed' as const })),
    filter: 'all',
    stats: { total: 4, active: 0, completed: 4 },
    onToggle: () => {},
    onDelete: () => {},
    onFilterChange: () => {},
    onClearCompleted: () => {},
  },
};
