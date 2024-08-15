import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/src/components'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    label: 'Input Label',
    name: 'input-name',
    placeholder: 'Placeholder',
    required: false,
    title: 'Title',
    type: 'text',
  },
}
