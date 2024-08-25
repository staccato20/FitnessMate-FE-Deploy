import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import ImgCheckBox from "@components/CheckBox/ImgCheckBox"

const DUMMY = {
  src: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff232c91e-8982-44e7-8204-94b35d7c7658%2Fea7f864f-2d59-4dcf-809e-bdd0050382cc%2Fmachine.png?table=block&id=5da2f828-0e6f-47c5-a55a-b22c6d0b39a7&spaceId=f232c91e-8982-44e7-8204-94b35d7c7658&width=1330&userId=241b00fe-6fc0-45d2-aee7-30a172e94441&cache=v2",
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
    const [{ isSelected }, setIsSelected] = useArgs()
    const handleToggle = () => {
      setIsSelected({ isSelected: !isSelected })
    }
    return (
      <ImgCheckBox
        {...args}
        isSelected={isSelected}
        setIsSelected={handleToggle}>
        {args.children}
      </ImgCheckBox>
    )
  },
}
