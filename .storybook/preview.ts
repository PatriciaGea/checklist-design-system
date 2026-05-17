import type { Preview } from '@storybook/react';

// Single import: global.css contains @tailwind directives + design tokens
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
