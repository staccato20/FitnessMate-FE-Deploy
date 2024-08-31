import type { Meta, StoryObj } from "@storybook/react"

import Accordion from "@components/Accordion/Accordion"

const DUMMY_DATA = (
  <Accordion>
    <Accordion.Header>gg</Accordion.Header>
    <Accordion.Content>gg</Accordion.Content>
    <Accordion.Trigger />
  </Accordion>
)

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "components/Accordion",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#F2F4F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ width: "716px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  render: () => {
    return DUMMY_DATA
  },
}
