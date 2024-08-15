import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/src/components'

import { FaCaretDown } from 'react-icons/fa6'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    titleClassName: 'shout',
    contentClassName: 'talk',
    icon: <FaCaretDown className="text-xl" />,
    panels: [
      {
        title: 'Panel 1',
        content: 'Content 1',
      },
      {
        title: 'Panel 2',
        content: 'Content 2',
      },
      {
        title: 'Panel 3',
        content: 'Content 3',
      },
    ],
  },
}
