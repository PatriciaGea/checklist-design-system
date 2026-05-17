import type { Meta, StoryObj } from '@storybook/react';
import { TaskItem } from '../components/TaskItem';
import type { Task } from '../types/task';

const activeTask: Task = {
  id: '1',
  text: 'Review the pull request from the design team',
  status: 'active',
  createdAt: Date.now(),
};

const completedTask: Task = {
  id: '2',
  text: 'Set up the project repository',
  status: 'completed',
  createdAt: Date.now() - 3600000,
  completedAt: Date.now(),
};

const meta: Meta<typeof TaskItem> = {
  title: 'Features/TaskItem',
  component: TaskItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '**Feature-level** row component that composes the `Checkbox` and `Button` system primitives into a single task entry with toggle and delete interactions. The delete button is keyboard-accessible but visually hidden until hover, keeping the UI clean without sacrificing usability.',
      },
    },
  },
  decorators: [
    Story => (
      <ul className="max-w-md border border-gray-200 rounded-lg overflow-hidden">
        <Story />
      </ul>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TaskItem>;

export const Active: Story = {
  args: {
    task: activeTask,
    onToggle: () => {},
    onDelete: () => {},
  },
};

export const Completed: Story = {
  args: {
    task: completedTask,
    onToggle: () => {},
    onDelete: () => {},
  },
};

export const LongText: Story = {
  args: {
    task: {
      ...activeTask,
      text: 'Investigate the root cause of the performance regression in the dashboard page that was reported by multiple users last week and document findings',
    },
    onToggle: () => {},
    onDelete: () => {},
  },
};
