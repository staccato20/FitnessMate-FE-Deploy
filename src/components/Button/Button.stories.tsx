import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    leftIcon: {
      control: "text",
      description: "Name of the icon for the left side",
    },
    rightIcon: {
      control: "text",
      description: "Name of the icon for the right side",
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    disabled: false,
    size: "md",
    variant: "main",
    children: "Button",
    leftIcon: undefined,
    rightIcon: undefined,
  },
}
