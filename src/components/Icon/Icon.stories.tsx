import type { Meta, StoryObj } from "@storybook/react"

import Icon from "@components/Icon/Icon"

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "components/Icon",
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
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    icon: "style",
  },
}
