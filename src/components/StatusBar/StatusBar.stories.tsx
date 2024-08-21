import { Meta, StoryObj } from "@storybook/react"

import StatusBar from "@components/StatusBar/StatusBar"

const meta: Meta<typeof StatusBar> = {
  component: StatusBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    status: {
      control: "select",
      options: [1, 2, 3, 4],
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
type Story = StoryObj<typeof StatusBar>

export const Primary: Story = {
  args: {
    status: 1,
  },
}
