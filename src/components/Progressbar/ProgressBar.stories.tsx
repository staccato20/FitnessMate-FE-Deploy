import { Meta, StoryObj } from "@storybook/react"

import Progressbar from "@components/Progressbar/Progressbar"

const meta: Meta<typeof Progressbar> = {
  component: Progressbar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    status: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "474px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Progressbar>

export const Primary: Story = {
  args: {
    status: 1,
  },
}
