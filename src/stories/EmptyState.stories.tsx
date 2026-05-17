import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../components/EmptyState';
import { Button } from '../components/Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Features/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '**Feature-level** component displayed when the task list is empty or when active filters return no results. Includes two bespoke SVG illustrations and an optional action slot. Unlike system primitives, this component is coupled to the Checklist domain — it should not be promoted to the core design system.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['empty', 'filtered'] },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoTasks: Story = {
  args: { variant: 'empty' },
};

export const NoFilterResults: Story = {
  args: { variant: 'filtered' },
};

export const WithCustomText: Story = {
  args: {
    title: 'All done!',
    description: "You've completed everything. Time for a break ☕",
    variant: 'empty',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'empty',
    title: 'No tasks yet',
    description: 'Start by adding your first task.',
    action: <Button size="sm">Add your first task</Button>,
  },
};
