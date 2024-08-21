import type { Meta, StoryObj } from "@storybook/react"

import IconButton from "@components/IconButton/IconButton"

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "components/IconButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    icon: {
      control: "text",
      table: { type: { summary: "Google Material Icon의 정해진 아이콘 라벨" } },
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  args: {
    icon: "style",
  },
}
