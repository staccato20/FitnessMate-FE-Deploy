import type { Meta, StoryObj } from "@storybook/react"

import IconButton from "./IconButton"

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "components/IconButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    icon: {
      control: "text",
      description: "Google Material Icon의 정해진 아이콘 라벨만 사용",
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
