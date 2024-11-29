import { DraggableProvided, DraggableStateSnapshot } from "@hello-pangea/dnd"

import IconButton from "@components/IconButton/IconButton"
import {
  BottomTitle,
  BottomWrapper,
  DetailIconButtonWrapper,
  FixIconButtonWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderRightInfo,
  HeaderRightInfoContent,
  HeaderRightInfoUnit,
  HeaderWrapper,
  MyWorkoutWrapper,
  TopLine,
} from "@components/MyWorkout/StyledMyWorkout"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import theme from "@styles/theme"

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
  isDragging: boolean // 드래깅 상태
}

const MyWorkout = ({
  children,
  onClick,
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
    <MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      isDragging={isDragging}>
      <HeaderWrapper>
        <HeaderLeft onClick={onClick}>
          <Title variant="midC">
            <Title.SubTopIconTitle>
              {children}
              <DetailIconButtonWrapper>
                <IconButton
                  icon="RightArrowGrey"
                  size={24}
                  onClick={handleFixWorkout}
                  color={theme.Netural500}
                />
              </DetailIconButtonWrapper>
            </Title.SubTopIconTitle>
            <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
          </Title>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightInfo>
            중량
            <HeaderRightInfoContent>
              {weight}
              <HeaderRightInfoUnit>kg</HeaderRightInfoUnit>
            </HeaderRightInfoContent>
          </HeaderRightInfo>
          <HeaderRightInfo>
            횟수
            <HeaderRightInfoContent>
              {rep}
              <HeaderRightInfoUnit>회</HeaderRightInfoUnit>
            </HeaderRightInfoContent>
          </HeaderRightInfo>
          <HeaderRightInfo>
            세트 수
            <HeaderRightInfoContent>
              {setCount}
              <HeaderRightInfoUnit>세트</HeaderRightInfoUnit>
            </HeaderRightInfoContent>
          </HeaderRightInfo>
        </HeaderRight>
      </HeaderWrapper>
      <TopLine />
      <BottomWrapper>
        <BottomTitle>주의사항</BottomTitle>
        {caution}
      </BottomWrapper>
      <FixIconButtonWrapper>
        <IconButton
          icon="PencilGrey"
          size={18}
          onClick={handleFixWorkout}
        />
      </FixIconButtonWrapper>
    </MyWorkoutWrapper>
  )
}

export default MyWorkout
