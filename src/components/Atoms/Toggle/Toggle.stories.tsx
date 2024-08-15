import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '@/src/components'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    align: 'right',
    name: 'toggle',
    label: 'Toggle',
  },
}
