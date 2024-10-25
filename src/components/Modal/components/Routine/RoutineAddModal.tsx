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

  // const [selectedRoutines, setSelectedRoutines] = useState<number[]>([])

  const { myRoutines: routines } = useGetMyRoutines()

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
              <S.RoutineItem key={routineId}>
                <S.RoutineName>{routineName}</S.RoutineName>
                <S.RoutineState>추가됨</S.RoutineState>
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
