import { Meta, StoryObj } from "@storybook/react"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import AlertModal from "@components/Modal/components/Alert/AlertModal"
import LoadingModal from "@components/Modal/components/Loading/LoadingModal"

import { useModal } from "@hooks/useModal"

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "components/Modal",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Modal>

const AlertModalButton = () => {
  const { onOpen } = useModal("알림")
  return (
    <Button
      onClick={onOpen}
      variant="main">
      알림
    </Button>
  )
}

const LoadingModalButton = () => {
  const { onOpen } = useModal("로딩")
  return (
    <Button
      onClick={onOpen}
      variant="main">
      로딩
    </Button>
  )
}

export const Alert: Story = {
  render: () => (
    <>
      <AlertModalButton />
      <AlertModal />
    </>
  ),
}

export const Loading: Story = {
  render: () => (
    <>
      <LoadingModalButton />
      <LoadingModal />
    </>
  ),
}
