import type { Meta, StoryObj } from '@storybook/react'

import About from './About'
import CaseStudies from './CaseStudies'

const meta: Meta<typeof About> = {
  component: About,
  title: 'Introduction/About',
}

export default meta
type Story = StoryObj<typeof About>

export const AboutBrandableUI: Story = {
  render: () => <About />,
  parameters: {
    options: { showPanel: false },
  },
}

export const UseCases: Story = {
  render: () => <CaseStudies />,
  parameters: {
    options: { showPanel: false },
  },
}
