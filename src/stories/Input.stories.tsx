import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accessible text field with optional label, helper text, error state, and left/right icon slots. Uses `useId()` for stable `htmlFor`/`id` pairing, `aria-invalid` + `aria-describedby` for error announcements, and `forwardRef` for imperative focus control. **System-level** primitive.',
      },
    },
  },
  decorators: [Story => <div className="max-w-sm"><Story /></div>],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter a value…' },
};

export const WithLabel: Story = {
  args: { label: 'Task name', placeholder: 'Buy groceries' },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    defaultValue: 'not-an-email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: { label: 'Disabled field', value: 'Read only value', disabled: true },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search tasks…',
    leftIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};
