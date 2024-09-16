import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from '@/src/components'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  args: {
    align: 'left',
    label: 'Toggle',
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Component: Story = {
  render: (args) => <Toggle {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Toggle</h1>
      {/* Primary Toggle */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="primary" label="Toggle" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Toggle */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="secondary" label="Toggle" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Toggle */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="tertiary" label="Toggle" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Toggle */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="accent" label="Toggle" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Toggle */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="ink" label="Toggle" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Toggle */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Toggle</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Toggle align="left" color="paper" label="Toggle" />
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
