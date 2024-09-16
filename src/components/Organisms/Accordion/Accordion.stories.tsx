import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/src/components'

import { FaCaretDown } from 'react-icons/fa6'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
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

export default meta
type Story = StoryObj<typeof Accordion>

export const Component: Story = {
  render: (args) => <Accordion {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Accordion</h1>
      {/* Primary Accordion */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="primary" {...args} />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Accordion */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="secondary" {...args} />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Accordion */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="tertiary" {...args} />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Accordion */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="accent" {...args} />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Accordion */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="ink" {...args} />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Accordion */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Accordion</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Accordion color="paper" {...args} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    options: { bottomPanelHeight: 0, rightPanelWidth: 0 },
    actions: { disable: true },
    a11y: { disable: true },
  },
}
