import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/src/components'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    color: 'primary',
    label: `Your Name`,
    name: 'Textarea-name',
    placeholder: 'Your full name here',
    required: false,
    title: 'Type your name',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Component: Story = {
  render: (args) => <Textarea {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Textarea</h1>
      {/* Primary Button */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="primary" label="Primary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Textarea */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="secondary" label="Secondary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Textarea */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="tertiary" label="Tertiary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Textarea */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="accent" label="Accent" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Textarea */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="ink" label="Ink" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Textarea */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Textarea</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Textarea {...args} color="paper" label="Paper" />
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
