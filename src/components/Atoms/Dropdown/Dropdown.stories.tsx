import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dropdown } from '@/src/components'
import { FaCaretDown } from 'react-icons/fa'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  args: {
    className: '',
    icon: <FaCaretDown className="text-base" />,
    label: 'Test Label',
    name: 'test',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
      { label: 'Option 5', value: 'option5' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Component: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState(
      args.selectedOption || { label: 'Option 1', value: 'option1' },
    )

    const handleSelect = (option: { label: string; value: string }) => {
      setSelectedOption(option)
    }

    return (
      <Dropdown
        {...args}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        title="Select an option"
      />
    )
  },
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState(
      args.selectedOption || { label: 'Option 1', value: 'option1' },
    )

    const handleSelect = (option: { label: string; value: string }) => {
      setSelectedOption(option)
      console.log(option)
    }

    return (
      <div className="w-full flex flex-col space-y-2">
        <h1 className="w-full roar text-ink px-2 py-12">Dropdown</h1>
        {/* Primary */}
        <div className="w-full flex flex-col space-y-2 p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-ink pb-4">Primary Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="primary"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
          <div className="w-full pt-6">
            <hr className="w-full border-ink" />
          </div>
        </div>
        {/* Secondary Input */}
        <div className="w-full flex flex-col space-y-2 p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-ink pb-4">Secondary Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="secondary"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
          <div className="w-full pt-6">
            <hr className="w-full border-ink" />
          </div>
        </div>
        {/* Tertiary */}
        <div className="w-full flex flex-col space-y-2 p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-ink pb-4">Tertiary Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="tertiary"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
          <div className="w-full pt-6">
            <hr className="w-full border-ink" />
          </div>
        </div>
        {/* Accent */}
        <div className="w-full flex flex-col space-y-2 p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-ink pb-4">Accent Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="accent"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
          <div className="w-full pt-6">
            <hr className="w-full border-ink" />
          </div>
        </div>
        {/* Ink */}
        <div className="w-full flex flex-col space-y-2 p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-ink pb-4">Ink Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="ink"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
          <div className="w-full pt-6">
            <hr className="w-full border-ink" />
          </div>
        </div>
        {/* Paper */}
        <div className="w-full flex flex-col space-y-2 bg-ink p-6">
          <div className="w-full flex flex-row space-x-2 px-2">
            <h3 className="shout text-paper-light pb-4">Paper Dropdown</h3>
          </div>
          <div className="w-full flex flex-row space-x-2 px-2 pb-4">
            <Dropdown
              {...args}
              color="paper"
              selectedOption={selectedOption}
              onSelect={handleSelect}
              title="Select an option"
            />
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    options: { bottomPanelHeight: 0, rightPanelWidth: 0 },
    actions: { disable: true },
    a11y: { disable: true },
  },
}
