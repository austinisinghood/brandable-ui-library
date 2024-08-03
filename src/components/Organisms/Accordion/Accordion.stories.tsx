import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/src/components'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    buttonClassName: 'shout',
    contentClassName: 'talk',
    panels: [
      {
        button: 'Panel 1',
        content: 'Content 1',
      },
      {
        button: 'Panel 2',
        content: 'Content 2',
      },
      {
        button: 'Panel 3',
        content: 'Content 3',
      },
    ],
  },
}
