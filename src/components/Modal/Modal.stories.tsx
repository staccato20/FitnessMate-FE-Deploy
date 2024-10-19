import { Meta, StoryObj } from "@storybook/react"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "components/Modal",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Modal>

const OpenButton = () => {
  const { onOpen } = useModal("운동추천")

  return (
    <Button
      onClick={onOpen}
      variant="main">
      모달 열기
    </Button>
  )
}

export const Primary: Story = {
  render: () => (
    <>
      <OpenButton />
      <Modal name="운동추천">
        <Modal.Title>
          <Title variant="midA">
            페이지를 나가시겠어요?
            <Title.SubBottomTitle>
              추천 결과가 저장되지 않아요.
            </Title.SubBottomTitle>
          </Title>
          <Modal.Buttons>
            <Button variant="grey">그만할래요</Button>
            <Button variant="main">이어서 보기</Button>
          </Modal.Buttons>
        </Modal.Title>
      </Modal>
    </>
  ),
}

export const Second: Story = {
  render: () => (
    <>
      <OpenButton />
      <Modal
        isCloseButton
        name="운동추천">
        <Modal.Title>
          <Title variant="midA">
            페이지를 나가시겠어요?
            <Title.SubBottomTitle>
              추천 결과가 저장되지 않아요.
            </Title.SubBottomTitle>
          </Title>
          <Modal.Buttons>
            <Button variant="grey">그만할래요</Button>
            <Button variant="main">이어서 보기</Button>
          </Modal.Buttons>
        </Modal.Title>
      </Modal>
    </>
  ),
}
