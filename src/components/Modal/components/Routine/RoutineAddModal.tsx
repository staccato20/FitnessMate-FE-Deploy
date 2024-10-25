import { useState } from "react"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useModal } from "../../../../hooks/useModal"
import * as S from "./StyledRoutineModal"

const RoutineAddModal = () => {
  const { isOpen, onClose } = useModal("루틴추가")

  const [selectedRoutines, setSelectedRoutines] = useState<number[]>([])

  const handleRoutines = () => {}

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
            <S.RoutineItem key={0}>
              <S.RoutineName>가슴 집중 DAY</S.RoutineName>
              <S.RoutineState>추가됨</S.RoutineState>
            </S.RoutineItem>
            <S.RoutineItem key={1}>
              <S.RoutineName>가슴 집중 DAY</S.RoutineName>
              <S.RoutineState>추가됨</S.RoutineState>
            </S.RoutineItem>
            <S.RoutineItem key={2}>
              <S.RoutineName>가슴 집중 DAY</S.RoutineName>
              <S.RoutineState>추가됨</S.RoutineState>
            </S.RoutineItem>
            <S.RoutineItem key={3}>
              <S.RoutineName>가슴 집중 DAY</S.RoutineName>
              <S.RoutineState>추가됨</S.RoutineState>
            </S.RoutineItem>
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

const DUMMY_ROUTINES = [
  {
    routineId: 1349988,
    routineIndex: 0,
    routineName: "가슴 집중 DAY",
  },
  {
    routineId: 1349989,
    routineIndex: 1,
    routineName: " 집중 DAY",
  },
  {
    routineId: 1349990,
    routineIndex: 2,
    routineName: "어깨 집중 DAY",
  },
  {
    routineId: 1349991,
    routineIndex: 3,
    routineName: "하체 집중 DAY",
  },
  {
    routineId: 1349992,
    routineIndex: 4,
    routineName: "새로운 루틴",
  },
]
