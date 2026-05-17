import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible surface container for grouping related content. Four visual variants (`default`, `elevated`, `outlined`, `ghost`) and an interactive mode with hover lift and keyboard focus ring. Padding is independently configurable. **System-level** primitive.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'elevated', 'outlined', 'ghost'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const SampleContent = () => (
  <div>
    <h3 className="font-semibold text-gray-900 mb-1">Card title</h3>
    <p className="text-sm text-gray-500">
      This is the card body content. Cards group related information together.
    </p>
  </div>
);

export const Default: Story = {
  args: { children: <SampleContent /> },
};

export const Elevated: Story = {
  args: { variant: 'elevated', children: <SampleContent /> },
};

export const Outlined: Story = {
  args: { variant: 'outlined', children: <SampleContent /> },
};

export const Interactive: Story = {
  args: { interactive: true, children: <SampleContent /> },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-xl">
      {(['default', 'elevated', 'outlined', 'ghost'] as const).map(v => (
        <Card key={v} variant={v}>
          <p className="text-sm font-medium text-gray-700 capitalize">{v}</p>
          <p className="text-xs text-gray-400 mt-1">Card variant</p>
        </Card>
      ))}
    </div>
  ),
};
