import React from 'react'
import type { Preview } from '@storybook/react'

import '../src/styles/globals.scss'
import '../src/styles/fonts.scss'
import '../src/styles/themes.scss'

const MyThemes = ['default', 'techfriendly'] as const

const preview: Preview = {
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme
      const theme = MyThemes.includes(selectedTheme) ? selectedTheme : 'default'
      return <div className={`${theme}-theme-wrapper`}>{story()}</div>
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['default', 'techfriendly'],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
