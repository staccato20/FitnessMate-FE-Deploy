import { DraggableProvided } from "@hello-pangea/dnd"

import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import {
  BottomTitle,
  BottomWrapper,
  DetailIconButtonWrapper,
  FixIconButtonWrapper,
  HandleIconButtonWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderRightInfo,
  HeaderRightInfoContent,
  HeaderRightInfoUnit,
  HeaderWrapper,
  MyWorkoutContent,
  MyWorkoutWrapper,
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
    <MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}>
      <MyWorkoutContent isDragging={isDragging}>
        <HeaderWrapper>
          <HeaderLeft>
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
      </MyWorkoutContent>
      <HandleIconButtonWrapper>
        <Icon
          icon="handle"
          size={24}
        />
      </HandleIconButtonWrapper>
    </MyWorkoutWrapper>
  )
}

export default MyWorkout
