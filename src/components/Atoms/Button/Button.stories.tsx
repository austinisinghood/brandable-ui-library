import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/src/components'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    className: '',
    children: 'Button Text',
    color: 'primary',
    full: false,
    size: 'md',
    variant: 'solid',
  },
}
