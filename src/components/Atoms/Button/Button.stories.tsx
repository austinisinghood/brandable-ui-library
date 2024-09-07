import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/src/components'

import { ButtonProps } from '@/src/components/types'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button Text',
    className: '',
    color: 'primary',
    full: false,
    size: 'md',
    variant: 'solid',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Component: Story = {
  render: (args) => <Button {...args} />,
  parameters: {
    options: { showPanel: true },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Button</h1>
      {/* Primary Button */}
      <div className="w-full flex flex-col space-y-2 py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="primary" size="sm" variant="solid">
            Primary
          </Button>
          <Button color="primary" size="md" variant="solid">
            Primary
          </Button>
          <Button color="primary" size="lg" variant="solid">
            Primary
          </Button>
          <Button color="primary" size="lg" variant="solid" full>
            Primary
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="primary" size="sm" variant="outlined">
            Primary
          </Button>
          <Button color="primary" size="md" variant="outlined">
            Primary
          </Button>
          <Button color="primary" size="lg" variant="outlined">
            Primary
          </Button>
          <Button color="primary" size="lg" variant="outlined" full>
            Primary
          </Button>
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Button */}
      <div className="w-full flex flex-col space-y-2 py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="secondary" size="sm" variant="solid">
            Secondary
          </Button>
          <Button color="secondary" size="md" variant="solid">
            Secondary
          </Button>
          <Button color="secondary" size="lg" variant="solid">
            Secondary
          </Button>
          <Button color="secondary" size="lg" variant="solid" full>
            Secondary
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="secondary" size="sm" variant="outlined">
            Secondary
          </Button>
          <Button color="secondary" size="md" variant="outlined">
            Secondary
          </Button>
          <Button color="secondary" size="lg" variant="outlined">
            Secondary
          </Button>
          <Button color="secondary" size="lg" variant="outlined" full>
            Secondary
          </Button>
        </div>{' '}
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Button */}
      <div className="w-full flex flex-col space-y-2 py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="tertiary" size="sm" variant="solid">
            Tertiary
          </Button>
          <Button color="tertiary" size="md" variant="solid">
            Tertiary
          </Button>
          <Button color="tertiary" size="lg" variant="solid">
            Tertiary
          </Button>
          <Button color="tertiary" size="lg" variant="solid" full>
            Tertiary
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="tertiary" size="sm" variant="outlined">
            Tertiary
          </Button>
          <Button color="tertiary" size="md" variant="outlined">
            Tertiary
          </Button>
          <Button color="tertiary" size="lg" variant="outlined">
            Tertiary
          </Button>
          <Button color="tertiary" size="lg" variant="outlined" full>
            Tertiary
          </Button>
        </div>{' '}
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Button */}
      <div className="w-full flex flex-col space-y-2 py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="accent" size="sm" variant="solid">
            Accent
          </Button>
          <Button color="accent" size="md" variant="solid">
            Accent
          </Button>
          <Button color="accent" size="lg" variant="solid">
            Accent
          </Button>
          <Button color="accent" size="lg" variant="solid" full>
            Accent
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="accent" size="sm" variant="outlined">
            Accent
          </Button>
          <Button color="accent" size="md" variant="outlined">
            Accent
          </Button>
          <Button color="accent" size="lg" variant="outlined">
            Accent
          </Button>
          <Button color="accent" size="lg" variant="outlined" full>
            Accent
          </Button>
        </div>{' '}
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Button */}
      <div className="w-full flex flex-col space-y-2 py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="ink" size="sm" variant="solid">
            Ink
          </Button>
          <Button color="ink" size="md" variant="solid">
            Ink
          </Button>
          <Button color="ink" size="lg" variant="solid">
            Ink
          </Button>
          <Button color="ink" size="lg" variant="solid" full>
            Ink
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="ink" size="sm" variant="outlined">
            Ink
          </Button>
          <Button color="ink" size="md" variant="outlined">
            Ink
          </Button>
          <Button color="ink" size="lg" variant="outlined">
            Ink
          </Button>
          <Button color="ink" size="lg" variant="outlined" full>
            Ink
          </Button>
        </div>{' '}
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Button */}
      <div className="w-full flex flex-col space-y-2 bg-ink py-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Button</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">Solid</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="paper" size="sm" variant="solid">
            Paper
          </Button>
          <Button color="paper" size="md" variant="solid">
            Paper
          </Button>
          <Button color="paper" size="lg" variant="solid">
            Paper
          </Button>
          <Button color="paper" size="lg" variant="solid" full>
            Paper
          </Button>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">Outlined</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Button color="paper" size="sm" variant="outlined">
            Paper
          </Button>
          <Button color="paper" size="md" variant="outlined">
            Paper
          </Button>
          <Button color="paper" size="lg" variant="outlined">
            Paper
          </Button>
          <Button color="paper" size="lg" variant="outlined" full>
            Paper
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    options: { showPanel: false },
  },
}
