import { SubmitHandler, useFormContext } from "react-hook-form"

import styled from "styled-components"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import { ContentWrapper } from "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { RoutineNameTypes } from "@typpes/type"

import { useModal } from "@hooks/useModal"

import { fonts, theme } from "@styles/theme"

const RoutineMakeModal = () => {
  const { isOpen, onClose } = useModal("루틴생성")
  const { register, watch, handleSubmit, formState } =
    useFormContext<RoutineNameTypes>()
  const inputValue = watch("routineName", "")

  const handleRoutineName: SubmitHandler<RoutineNameTypes> = ({
    routineName,
  }) => {
    console.log(routineName)
  }

  const handleFormAdapter = () => {
    handleSubmit(handleRoutineName)()
  }

  return (
    <Modal
      isCloseButton
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="midA">
          새로 만들
          <br />
          루틴 이름을 지어보세요
          <Title.SubBottomTitle>
            '가슴 정복'처럼 부위별로 이름을 지어보는 것도 좋아요
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper>
          <ContentForm onSubmit={handleSubmit(handleRoutineName)}>
            <ContentInput
              $isError={!!formState.errors.routineName}
              placeholder="어떤 이름이 좋을까요?"
              {...register("routineName", { required: true, maxLength: 7 })}
            />
            <ContentInputLabel
              $isError={formState.isDirty && !!formState.errors.routineName}>
              {inputValue.length}/7자
            </ContentInputLabel>
          </ContentForm>
        </ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full"
          onClick={handleFormAdapter}>
          이 이름으로 할래요
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineMakeModal

const ContentForm = styled.form`
  display: flex;
  gap: 12px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentInput = styled.input<{ $isError: boolean }>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1}
  }
  text-align: center;
  width: 100%;
  min-height: 36px;
  ${fonts.h1};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural900)};

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
`
const ContentInputLabel = styled.span<{ $isError: boolean }>`
  ${fonts.b7};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural450)};
`
