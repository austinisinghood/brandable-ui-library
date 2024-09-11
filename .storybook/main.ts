// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-vite',

  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  // Optional
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],

  docs: {},

  staticDirs: ['../public'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
