import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Compact status label for counts, categories, or state indicators. Five semantic variants map directly to the design token color palette (`primary`, `success`, `danger`, `warning`, `neutral`). Optional dot decoration for presence/status signals. **System-level** primitive.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'success', 'danger', 'warning', 'neutral'] },
    size: { control: 'select', options: ['sm', 'md'] },
    dot: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
};

export const Success: Story = {
  args: { children: 'Completed', variant: 'success', dot: true },
};

export const Danger: Story = {
  args: { children: 'Overdue', variant: 'danger', dot: true },
};

export const Warning: Story = {
  args: { children: 'Pending', variant: 'warning' },
};

export const Neutral: Story = {
  args: { children: '12 tasks', variant: 'neutral' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success" dot>Success</Badge>
      <Badge variant="danger" dot>Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
    </div>
  ),
};
