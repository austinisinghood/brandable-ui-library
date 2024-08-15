import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '@/src/components'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  args: {
    className: 'w-fit',
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
