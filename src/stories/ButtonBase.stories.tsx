import type { Meta, StoryObj } from "@storybook/react"

import ButtonBase from "./ButtonBase"

const meta = {
  component: ButtonBase,
} satisfies Meta<typeof ButtonBase>

export default meta
type Story = StoryObj<typeof ButtonBase>

export const Primary = {
  args: {
    disabled: false,
    size: "md",
    variant: "main",
    children: "Button",
  },
} satisfies Story
