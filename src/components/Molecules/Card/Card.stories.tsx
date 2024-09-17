import type { Meta, StoryObj } from '@storybook/react'
import { Button, Card } from '@/src/components'

import { FaCaretDown } from 'react-icons/fa6'

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    align: 'left',
    color: 'paper',
    children: (
      <div className="w-[250px]">
        <h2 className="shout pb-2">Title</h2>
        <p className="talk pb-4">Paragraph</p>
        <Button color="ink" size="md" variant="solid">
          Button Text
        </Button>
      </div>
    ),
    width: 33,
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Component: Story = {
  render: (args) => <Card {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Card</h1>
      {/* Primary Card */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="primary"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="paper" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Card */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="secondary"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="ink" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Card */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="tertiary"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="accent" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Card */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="accent"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="ink" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Card */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="ink"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="paper" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Card */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Card</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Card
            {...args}
            color="paper"
            children={
              <div className="w-[250px]">
                <h2 className="shout pb-2">Title</h2>
                <p className="talk pb-4">Paragraph</p>
                <Button color="ink" size="md" variant="solid">
                  Button Text
                </Button>
              </div>
            }
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
