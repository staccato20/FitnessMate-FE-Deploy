import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import ImgCheckBox from "@components/CheckBox/ImgCheckBox"

const DUMMY = {
  src: "https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5",
  alt: "테스트 이미지를 설명",
}

const meta: Meta<typeof ImgCheckBox> = {
  component: ImgCheckBox,
  title: "components/ImgCheckBox",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof ImgCheckBox>

export const Primary: Story = {
  args: {
    variant: "big",
    ...DUMMY,
    isSelected: false,
    children: "스미스 머신",
  },
  render: (args) => {
    const [{ isSelected }, setArgs] = useArgs()
    const handleToggle = () => {
      setArgs({ isSelected: !isSelected })
    }
    return (
      <ImgCheckBox
        {...args}
        isSelected={isSelected}
        handleToggle={handleToggle}>
        {args.children}
      </ImgCheckBox>
    )
  },
}
