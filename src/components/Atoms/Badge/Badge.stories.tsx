import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/src/components'

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    children: 'Badge Text',
    className: '',
    color: 'primary',
    size: 'md',
    variant: 'solid',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Component: Story = {
  render: (args) => <Badge {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Badge</h1>
      {['primary', 'secondary', 'tertiary', 'accent', 'ink', 'paper'].map((color) => (
        <div
          key={color}
          className={`w-full flex flex-col space-y-2 p-6 ${color === 'paper' ? 'bg-ink' : ''}`}
        >
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className={`shout ${color === 'paper' ? 'text-paper' : 'text-ink'} pb-4`}>
              {color.charAt(0).toUpperCase() + color.slice(1)} Badge
            </h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2">
            <label className={`chat ${color === 'paper' ? 'text-paper' : 'text-ink'}`}>Solid</label>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Badge color={color as any} size="sm" variant="solid">
              Small
            </Badge>
            <Badge color={color as any} size="md" variant="solid">
              Medium
            </Badge>
            <Badge color={color as any} size="lg" variant="solid">
              Large
            </Badge>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2">
            <label className={`chat ${color === 'paper' ? 'text-paper' : 'text-ink'}`}>
              Outlined
            </label>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Badge color={color as any} size="sm" variant="outlined">
              Small
            </Badge>
            <Badge color={color as any} size="md" variant="outlined">
              Medium
            </Badge>
            <Badge color={color as any} size="lg" variant="outlined">
              Large
            </Badge>
          </div>
          {color !== 'paper' && (
            <div className="w-full pt-6">
              <hr className="w-full border-ink" />
            </div>
          )}
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    options: { bottomPanelHeight: 0, rightPanelWidth: 0 },
    actions: { disable: true },
    a11y: { disable: true },
  },
}
