import { useState } from "react"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"

import { useModal } from "../../../../hooks/useModal"
import * as S from "./StyledRoutineModal"

const RoutineAddModal = () => {
  const { isOpen, onClose } = useModal("루틴추가")

  const [selectedRoutines, setSelectedRoutines] = useState(new Set<number>())

  const { myRoutines: routines } = useGetMyRoutines()

  const handleToggleRoutine = (routineId: number) => {
    setSelectedRoutines((prevSet) => updateSet(prevSet, routineId))
  }

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    if (updatedSet.has(id)) {
      updatedSet.delete(id)
    } else {
      updatedSet.add(id)
    }

    return updatedSet
  }

  console.log(selectedRoutines)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton>
      <Modal.Title>
        <Title variant="midA">
          데드리프트를 추가할
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
            {routines.map(({ routineId, routineName }) => (
              <S.RoutineItem
                key={routineId}
                onClick={() => {
                  handleToggleRoutine(routineId)
                }}
                $isSelected={selectedRoutines.has(routineId)}>
                <S.RoutineName $isSelected={selectedRoutines.has(routineId)}>
                  {routineName}
                </S.RoutineName>
                <S.RoutineState>
                  <Icon
                    icon={
                      selectedRoutines.has(routineId)
                        ? "AddBoldBlue"
                        : "AddBoldGray"
                    }
                    size={32}
                  />
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
