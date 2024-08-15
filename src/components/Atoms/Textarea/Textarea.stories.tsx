import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/src/components'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args: {
    label: 'Textarea Label',
    name: 'textarea-name',
    placeholder: 'Placeholder',
    required: false,
    title: 'Title',
  },
}
