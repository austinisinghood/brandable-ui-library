import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/src/components'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  args: {
    color: 'primary',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Component: Story = {
  render: (args) => <Spinner {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Spinner</h1>
      {/* Primary Spinner */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="primary" size="sm" />
          <Spinner color="primary" size="md" />
          <Spinner color="primary" size="lg" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Spinner */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="secondary" size="sm" />
          <Spinner color="secondary" size="md" />
          <Spinner color="secondary" size="lg" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Spinner */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="tertiary" size="sm" />
          <Spinner color="tertiary" size="md" />
          <Spinner color="tertiary" size="lg" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Spinner */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="accent" size="sm" />
          <Spinner color="accent" size="md" />
          <Spinner color="accent" size="lg" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Spinner */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="ink" size="sm" />
          <Spinner color="ink" size="md" />
          <Spinner color="ink" size="lg" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Spinner */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row items-center space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Spinner</h3>
        </div>
        <div className="w-full flex flex-row items-center space-x-2 px-2 pb-4">
          <Spinner color="paper" size="sm" />
          <Spinner color="paper" size="md" />
          <Spinner color="paper" size="lg" />
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
