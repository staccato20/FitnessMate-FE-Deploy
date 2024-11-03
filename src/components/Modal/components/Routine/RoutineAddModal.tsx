import { useEffect, useState } from "react"

import { useModalStore } from "@store/useModalStore"

import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import RoutineInfoModalButton from "@components/Modal/components/Routine/RoutineInfoModalButton"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useGetRoutineQueries } from "@hooks/query/useGetRoutineQueries"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

const RoutineAddModal = () => {
  const { isOpen, onClose } = useModal("루틴추가")
  const { onOpen } = useModal("루틴정보")

  const [selectedRoutines, setSelectedRoutines] = useState(new Set<number>())
  const { setRoutineState, workoutState } = useModalStore()

  const { data: routines = [] } = useGetMyRoutines()

  const { data: workouts, refetchAll } = useGetRoutineQueries(routines)

  const filteredRoutines = [...routines].map((routine, index) =>
    workouts[index]?.some((workout) =>
      workout?.workoutName.includes(workoutState.koreanName),
    )
      ? { ...routine, isAdded: true }
      : { ...routine, isAdded: false },
  )

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

  const saveRoutineState = () => {
    setRoutineState([...selectedRoutines])
    setSelectedRoutines(new Set())
  }

  useEffect(() => {
    refetchAll()
  }, [routines, refetchAll])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton>
      <Modal.Title>
        <Title variant="midA">
          {workoutState?.koreanName}를 추가할
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
                  $isAdded={!!isAdded}>
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
        <RoutineInfoModalButton
          onOpen={onOpen}
          onClose={onClose}
          saveRoutineState={saveRoutineState}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineAddModal
