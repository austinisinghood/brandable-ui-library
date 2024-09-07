import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/src/components'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    className: '',
    name: 'checkbox',
    label: 'Label Text',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Component: Story = {
  render: (args) => <Checkbox {...args} />,
  parameters: {
    options: { showPanel: true },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Checkbox</h1>
      {/* Primary Checkbox */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="primary" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="primary" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Checkbox */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="secondary" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="secondary" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Checkbox */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="tertiary" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="tertiary" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Checkbox */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="accent" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="accent" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Checkbox */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="ink" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="ink" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Checkbox */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Checkbox</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="paper" name="checkbox" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Checkbox color="paper" name="checkbox" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    options: { showPanel: false },
  },
}
