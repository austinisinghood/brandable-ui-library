import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '@/src/components'

import { FaCaretDown } from 'react-icons/fa'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  args: {
    className: '',
    icon: <FaCaretDown className="text-base" />,
    label: 'Test Label',
    name: 'test',
    onSelect: (option) => console.log(option),
    options: [
      {
        label: 'Test Label 1',
        value: 'Test Value 1',
      },
      {
        label: 'Test Label 2 askldjf;l aksjdf jas;dflkj',
        value: 'Test Value 2',
      },
      {
        label: 'Test Label 3',
        value: 'Test Value 3',
      },
    ],
    selectedOption: {
      label: 'Test Label 1',
      value: 'Test Value 1',
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Component: Story = {
  render: (args) => <Dropdown {...args} />,
  parameters: {
    options: { showPanel: true },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Dropdown</h1>
      {/* Primary Button */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Default Dropdown</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Dropdown</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Dropdown {...args} />
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
