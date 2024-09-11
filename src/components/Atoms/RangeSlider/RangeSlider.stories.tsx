import type { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '@/src/components'

const meta: Meta<typeof RangeSlider> = {
  component: RangeSlider,
  args: {
    color: 'primary',
    step: 1,
    min: 0,
    max: 100,
    defaultMinValue: 25,
    defaultMaxValue: 75,
  },
}

export default meta
type Story = StoryObj<typeof RangeSlider>

export const Component: Story = {
  render: (args) => <RangeSlider {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">RangeSlider</h1>
      {/* Primary RangeSlider */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="primary"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary RangeSlider */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="secondary"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary RangeSlider */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="tertiary"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent RangeSlider */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="accent"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink RangeSlider */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="ink"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper RangeSlider */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper RangeSlider</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <RangeSlider
            color="paper"
            step={0}
            min={1}
            max={100}
            defaultMinValue={25}
            defaultMaxValue={75}
          />
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
