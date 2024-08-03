import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/src/components'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    className: '',
    name: 'checkbox',
    label: 'Checkbox',
  },
}
