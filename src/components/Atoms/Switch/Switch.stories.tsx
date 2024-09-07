import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/src/components'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    options: ['Design', 'Dev', 'Both'],
    initialOption: 'Design',
  },
}
