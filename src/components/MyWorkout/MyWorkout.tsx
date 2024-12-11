import { DraggableProvided } from "@hello-pangea/dnd"

import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledMyWorkout"

interface MyWorkoutProps {
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
  const handleFixWorkout = () => {}

  return (
    <S.MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}>
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
                    onClick={handleFixWorkout}
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
        <S.FixIconButtonWrapper>
          <IconButton
            icon="PencilGrey"
            size={18}
            onClick={handleFixWorkout}
          />
        </S.FixIconButtonWrapper>
      </S.MyWorkoutContent>
      <S.HandleIconButtonWrapper>
        <Icon
          icon="Handle"
          size={24}
        />
      </S.HandleIconButtonWrapper>
    </S.MyWorkoutWrapper>
  )
}

export default MyWorkout
