import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/src/components'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    className: '',
    children: 'Button Text',
    color: 'primary',
    size: 'md',
    variant: 'solid',
  },
}
