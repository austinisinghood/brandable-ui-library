import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '@/src/components'

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  args: {
    color: 'primary',
    iconLeft: <FaCaretLeft className="text-xl" />,
    iconRight: <FaCaretRight className="text-xl" />,
    images: [
      'https://images.unsplash.com/photo-1722648404139-fcebc9e9f2d4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1722648404162-394d24498f1d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1722648404036-09f11bfcf2cb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    // color: 'primary',
    autoSlide: false,
    slideInterval: 3000,
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Component: Story = {
  render: (args) => <Carousel {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Carousel</h1>
      {/* Primary Carousel */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="primary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Carousel */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="secondary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Carousel */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="tertiary" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Carousel */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="accent" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Carousel */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="ink" />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Carousel */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Carousel</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Carousel {...args} color="paper" />
        </div>
      </div>
    </div>
  ),
}
