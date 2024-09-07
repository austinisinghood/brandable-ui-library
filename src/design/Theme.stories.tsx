import type { Meta, StoryObj } from '@storybook/react'

import { Color } from './Color'

const meta: Meta<typeof Color> = {
  component: Color,
}

export default meta
type Story = StoryObj<typeof Color>

const colorList = [
  {
    name: 'bg-primary-dark',
  },
  {
    name: 'bg-primary',
  },
  {
    name: 'bg-primary-light',
  },
  {
    name: 'bg-secondary-dark',
  },
  {
    name: 'bg-secondary',
  },
  {
    name: 'bg-secondary-light',
  },
  {
    name: 'bg-tertiary-dark',
  },
  {
    name: 'bg-tertiary',
  },
  {
    name: 'bg-tertiary-light',
  },
  {
    name: 'bg-accent-dark',
  },
  {
    name: 'bg-accent',
  },
  {
    name: 'bg-accent-light',
  },
  {
    name: 'bg-ink-dark',
  },
  {
    name: 'bg-ink',
  },
  {
    name: 'bg-ink-light',
  },
  {
    name: 'bg-paper-dark',
  },
  {
    name: 'bg-paper',
  },
  {
    name: 'bg-paper-light',
  },
]

export const Colors: Story = {
  args: {
    colors: colorList,
  },
}
