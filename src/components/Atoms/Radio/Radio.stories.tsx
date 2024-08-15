import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/src/components'

const meta: Meta<typeof Radio> = {
  component: Radio,
}

export default meta
type Story = StoryObj<typeof Radio>

export const Primary: Story = {
  args: {
    label: 'Radio Label',
    name: 'Radio-name',
    placeholder: 'Placeholder',
    required: false,
    title: 'Title',
  },
}
