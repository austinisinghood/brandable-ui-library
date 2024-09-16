import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '@/src/components'

import { SwitchProps } from '@/src/components/types'

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    options: ['Option1', 'Option2', 'Option3'],
    initialOption: 'Option1',
    onChange: (selectedOption: string) => console.log(selectedOption),
    label: 'Switch label',
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Component: Story = {
  render: (args) => <Switch {...args} />,
  parameters: {
    options: { bottomPanelHeight: 500, rightPanelWidth: 350 },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="w-full flex flex-col space-y-2">
      <h1 className="w-full roar text-ink px-2 py-12">Switch</h1>
      {/* Primary Switch */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Primary Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="primary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="primary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Secondary Switch */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Secondary Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="secondary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="secondary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Tertiary Switch */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Tertiary Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="tertiary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="tertiary"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Accent Switch */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Accent Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="accent"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="accent"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Ink Switch */}
      <div className="w-full flex flex-col space-y-2 p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-ink pb-4">Ink Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="ink"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-ink">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="ink"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
          />
        </div>
        <div className="w-full pt-6">
          <hr className="w-full border-ink" />
        </div>
      </div>
      {/* Paper Switch */}
      <div className="w-full flex flex-col space-y-2 bg-ink p-6">
        <div className="w-full flex flex-row space-x-2 px-2">
          <h3 className="shout text-paper-light pb-4">Paper Switch</h3>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">With Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="paper"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
            label="Switch label"
          />
        </div>
        <div className="w-full flex flex-row space-x-2 px-2">
          <label className="chat text-paper-light">Without Label</label>
        </div>
        <div className="w-full flex flex-row space-x-2 px-2 pb-4">
          <Switch
            color="paper"
            options={['Option1', 'Option2', 'Option3']}
            initialOption="Option1"
            onChange={(selectedOption) => console.log(selectedOption)}
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
