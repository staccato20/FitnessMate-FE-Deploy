import { DraggableProvided } from "@hello-pangea/dnd"
import type { Meta, StoryObj } from "@storybook/react"

import MyWorkout from "@components/MyWorkout/MyWorkout"

const DUMMY_DATA = (
  <MyWorkout
    onClick={() => {}}
    bodyParts={"가슴, 등"}
    weight="20"
    setCount="5"
    rep="12"
    caution="허리가 굽어지지 않도록 주의가 필요해요!"
    draggableProps={{} as DraggableProvided["draggableProps"]}
    dragHandleProps={{} as DraggableProvided["dragHandleProps"]}
    innerRef={() => {}}
    isDragging={false}>
    "벤치 프레스"
  </MyWorkout>
)

const meta: Meta<typeof MyWorkout> = {
  component: MyWorkout,
  title: "components/MyWorkout",
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
type Story = StoryObj<typeof MyWorkout>

export const Primary: Story = {
  render: () => {
    return DUMMY_DATA
  },
}
