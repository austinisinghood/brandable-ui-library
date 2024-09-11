import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/src/components'

const meta: Meta<typeof Radio> = {
  component: Radio,
  args: {
    className: '',
    name: 'Radio',
    label: 'Label Text',
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Component: Story = {
  args: {
    color: "primary"
  },

  render: (args) => <Radio {...args} />,

  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  }
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Radio</h1>
      {/* Primary Radio */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="primary" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="primary" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Radio */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="secondary" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="secondary" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Radio */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="tertiary" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="tertiary" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Radio */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="accent" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="accent" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Radio */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="ink" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="ink" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Radio */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Radio</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="paper" name="Radio" label="Label Text" />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Radio color="paper" name="Radio" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
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
