import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Custom checkbox with an animated SVG stroke-dashoffset checkmark. Supports `checked`, `unchecked`, and `indeterminate` states. The native `<input type="checkbox">` is kept in the DOM (visually hidden via `sr-only`) for full keyboard + screen-reader accessibility without custom ARIA wiring. **System-level** primitive.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: { label: 'Accept terms and conditions' },
};

export const Checked: Story = {
  args: { label: 'This task is done', checked: true },
};

export const Indeterminate: Story = {
  args: { label: 'Select all (partial)', indeterminate: true },
};

export const Disabled: Story = {
  args: { label: 'Unavailable option', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: 'Locked (checked)', checked: true, disabled: true },
};

export const Interactive: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={checked ? 'Task completed ✓' : 'Click to complete task'}
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
    );
  },
};

export const WithoutLabel: Story = {
  args: { 'aria-label': 'Toggle task' },
};
