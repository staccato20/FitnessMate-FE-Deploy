import { Meta, StoryObj } from "@storybook/react"

import SearchField from "@components/SearchField/SearchField"

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: "components/SearchField",
  tags: ["autodogs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof SearchField>

export const Primary: Story = {
  args: {
    placeholder: "어떤 운동이 좋을까요?",
    width: "500px",
  },
}
