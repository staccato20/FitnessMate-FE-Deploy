import { useState } from "react"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { Recommend } from "@typpes/type"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useGetMyWorkouts } from "@hooks/query/useGetMyWorkouts"

import { useModal } from "../../../../hooks/useModal"
import * as S from "./StyledRoutineModal"

interface RoutineAddModalProps {
  machine?: Recommend
}

const RoutineAddModal = ({ machine }: RoutineAddModalProps) => {
  const { isOpen, onClose } = useModal("루틴추가")

  const [selectedRoutines, setSelectedRoutines] = useState(new Set<number>())
  const { data: routines = [] } = useGetMyRoutines()

  const filteredRoutines = routines.map((routine) => {
    const { data: workouts } = useGetMyWorkouts(routine.routineId)

    if (
      workouts?.some(
        (workout) =>
          machine && workout.workoutName.includes(machine.koreanName),
      )
    ) {
      return { ...routine, isAdded: true }
    } else {
      return { ...routine, isAdded: false }
    }
  })

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    if (updatedSet.has(id)) {
      updatedSet.delete(id)
    } else {
      updatedSet.add(id)
    }
    return updatedSet
  }

  const handleToggleRoutine = (routineId: number) => {
    setSelectedRoutines((prevSet) => updateSet(prevSet, routineId))
  }
  console.log(filteredRoutines)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton>
      <Modal.Title>
        <Title variant="midA">
          {machine?.koreanName}를 추가할
          <br />
          루틴을 선택해주세요
          <Title.SubBottomTitle>여러 개 선택할 수 있어요</Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <S.ContentBigWrapper>
          <S.AddRoutineButton>
            <Icon
              icon="AddRoundGray"
              size={32}
            />
            추가하기
          </S.AddRoutineButton>
          <S.RoutineList>
            {filteredRoutines?.map(({ routineId, routineName, isAdded }) => (
              <S.RoutineItem
                key={routineId}
                onClick={() => {
                  handleToggleRoutine(routineId)
                }}
                $isSelected={selectedRoutines.has(routineId)}
                disabled={isAdded}>
                <S.RoutineName
                  $isSelected={selectedRoutines.has(routineId)}
                  $isAdded={isAdded}>
                  {routineName}
                </S.RoutineName>
                <S.RoutineState>
                  {isAdded ? (
                    "추가됨"
                  ) : (
                    <Icon
                      icon={
                        selectedRoutines.has(routineId)
                          ? "AddBoldBlue"
                          : "AddBoldGray"
                      }
                      size={32}
                    />
                  )}
                </S.RoutineState>
              </S.RoutineItem>
            ))}
          </S.RoutineList>
        </S.ContentBigWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full">
          다음
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineAddModal
