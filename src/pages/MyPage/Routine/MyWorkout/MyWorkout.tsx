import { useNavigate } from "react-router-dom"

import { DraggableProvided } from "@hello-pangea/dnd"

import MyWorkoutDropDown from "@components/DropDown/components/MyWorkoutDropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledMyWorkout"

interface MyWorkoutProps {
  routineId: number
  workoutId: number
  myWorkoutId: number
  children: string
  bodyParts: string
  caution: string
  setCount: string
  weight: string
  rep: string
  onClick: () => void
  draggableProps: DraggableProvided["draggableProps"]
  dragHandleProps: DraggableProvided["dragHandleProps"]
  innerRef: (element: HTMLElement | null) => void
  isDragging: boolean
}

const MyWorkout = ({
  routineId,
  workoutId,
  myWorkoutId,
  children,
  bodyParts,
  setCount,
  rep,
  weight,
  caution,
  draggableProps,
  dragHandleProps,
  innerRef,
  isDragging,
}: StrictPropsWithChildren<MyWorkoutProps>) => {
  const navigate = useNavigate()
  const handleDetailWorkout = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  return (
    <S.MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}>
      <S.MyWorkoutContent isDragging={isDragging}>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <Title variant="midC">
              <Title.SubTopIconTitle>
                {children}
                <S.DetailIconButtonWrapper>
                  <IconButton
                    icon="RightArrowGrey"
                    size={24}
                    onClick={() => {
                      handleDetailWorkout(workoutId)
                    }}
                  />
                </S.DetailIconButtonWrapper>
              </Title.SubTopIconTitle>
              <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
            </Title>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.HeaderRightInfo>
              중량
              <S.HeaderRightInfoContent>
                {weight}
                <S.HeaderRightInfoUnit>kg</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
            <S.HeaderRightInfo>
              횟수
              <S.HeaderRightInfoContent>
                {rep}
                <S.HeaderRightInfoUnit>회</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
            <S.HeaderRightInfo>
              세트 수
              <S.HeaderRightInfoContent>
                {setCount}
                <S.HeaderRightInfoUnit>세트</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BottomWrapper>
          <S.BottomTitle>주의사항</S.BottomTitle>
          {caution}
        </S.BottomWrapper>
        <MyWorkoutDropDown
          myWorkoutId={myWorkoutId}
          routineId={routineId}
        />
      </S.MyWorkoutContent>
      <S.HandleIconButtonWrapper {...dragHandleProps}>
        <Icon
          icon="Handle"
          size={24}
        />
      </S.HandleIconButtonWrapper>
    </S.MyWorkoutWrapper>
  )
}

export default MyWorkout
