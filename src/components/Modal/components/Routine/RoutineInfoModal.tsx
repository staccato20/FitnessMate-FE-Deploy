import { useEffect } from "react"
import { SubmitHandler, useFormContext } from "react-hook-form"

import { useModalStore } from "@store/useModalStore"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import {
  ContentMachineForm,
  ContentWrapper,
} from "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { RoutineInfoTypes } from "@typpes/type"

import { usePostAddRoutine } from "@hooks/mutation/usePostAddRoutine"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

const RoutineInfoModal = () => {
  const { isOpen, onClose } = useModal("루틴정보")
  const { register, handleSubmit, reset } = useFormContext<RoutineInfoTypes>()
  const { mutate, isSuccess, reset: resetMutation } = usePostAddRoutine()
  const { routineState, resetRoutineState, workoutState } = useModalStore()

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "")
  }

  const handleRoutine: SubmitHandler<RoutineInfoTypes> = ({
    weight,
    repeat,
    set,
  }) => {
    routineState.forEach((routineId) => {
      mutate({
        routineId,
        routineInfo: {
          workoutIds: [workoutState.workoutId],
          weight,
          rep: repeat,
          setCount: set,
          caution: workoutState.caution,
        },
      })
    })
    resetRoutineState()
    reset()
  }

  const handleFormAdapter = () => {
    handleSubmit(handleRoutine)()
  }

  useEffect(() => {
    if (isSuccess) {
      onClose()
      resetMutation()
    }
  }, [isSuccess, onClose])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          운동을 루틴에 추가해보세요
          <Title.SubBottomTitle>
            운동량은 언제든 수정할 수 있어요
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper>
          <ContentMachineForm onSubmit={handleSubmit(handleRoutine)}>
            <S.MachineInputList>
              <S.MachineInputItem key={0}>
                <S.MachineInput
                  placeholder="20"
                  maxLength={3}
                  {...register("weight", { required: true })}
                  onInput={handleNumberInput}
                />
                <S.Unit>kg</S.Unit>
              </S.MachineInputItem>
              <S.MachineInputItem key={1}>
                <S.MachineInput
                  placeholder="12"
                  maxLength={2}
                  {...register("repeat", { required: true })}
                  onInput={handleNumberInput}
                />
                <S.Unit>회</S.Unit>
              </S.MachineInputItem>
              <S.MachineInputItem key={2}>
                <S.MachineInput
                  placeholder="5"
                  maxLength={2}
                  {...register("set", { required: true })}
                  onInput={handleNumberInput}
                />
                <S.Unit>세트</S.Unit>
              </S.MachineInputItem>
            </S.MachineInputList>
            <S.MachineButton
              type="reset"
              onClick={() => reset()}>
              되돌리기
            </S.MachineButton>
          </ContentMachineForm>
        </ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full"
          onClick={handleFormAdapter}>
          추가하기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineInfoModal
