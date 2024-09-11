import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/src/components'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    color: 'primary',
    label: `Your Name`,
    name: 'input-name',
    placeholder: 'Your full name here',
    required: false,
    title: 'Type your name',
    type: 'text',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Component: Story = {
  render: (args) => <Input {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Input</h1>
      {/* Primary Button */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="primary" label="Primary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Input */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="secondary" label="Secondary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Input */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="tertiary" label="Tertiary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Input */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="accent" label="Accent" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Input */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="ink" label="Ink" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Input */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Input</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Input {...args} color="paper" label="Paper" />
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
