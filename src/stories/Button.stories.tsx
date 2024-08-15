import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary = {
  args: {
    disabled: false,
    size: "md",
    variant: "main",
    children: "Button",
  },
} satisfies Story
