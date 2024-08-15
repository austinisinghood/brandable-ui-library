import type { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '@/src/components'

const meta: Meta<typeof RangeSlider> = {
  component: RangeSlider,
}

export default meta
type Story = StoryObj<typeof RangeSlider>

export const Primary: Story = {
  args: {
    step: 1,
    min: 0,
    max: 100,
    defaultMinValue: 25,
    defaultMaxValue: 75,
  },
}
