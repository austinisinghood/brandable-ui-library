import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@/src/components'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {
    color: 'border-slate-500',
    size: 'md',
  },
}
