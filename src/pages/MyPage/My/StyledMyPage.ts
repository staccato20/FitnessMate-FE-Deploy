import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const MypageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background: ${theme.Netural200};
  z-index: -999;
`

export const MypageContainer = styled.ul`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`

export const MypageHomeArea = styled.ul`
  width: 870px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const MypageTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const MyInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`

export const MyBodyInfotmation = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const FixIconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: ${theme.Netural150};
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

export const RoutinesContainer = styled.div`
  .lengthRoutineContainer {
    display: flex;
    gap: 6px;
    align-items: center;

    .addRoutineButton {
      width: 44px;
      height: 44px;
      background: ${theme.Netural300};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .routineArea {
      display: flex;
      gap: 12px;
      height: 44px;
      padding: 0 12px 0 18px;
      align-items: center;
      border-radius: 30px;
      background: ${theme.Netural300};
      position: relative;

      .routineName {
        color: ${theme.Netural800};
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.192px;
      }
      .fixThisRoutine {
        cursor: pointer;
      }
    }
    .active {
      background: ${theme.Netural990};
      .routineName {
        color: ${theme.Netural0};
      }
      .svgFill {
        fill: ${theme.Netural0};
      }
    }
  }
`

export const inputContent = styled.input`
  &::-webkit-input-placeholder {
    color: ${theme.Netural0};
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.36px;
    line-height: 23.4px;
  }
  border: none;
  width: 100%;
  color: ${theme.Netural0};
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.36px;
  line-height: 23.4px;
`

export const DragAndDropWrapper = styled.div`
  display: flex;
  gap: 18px;
`

export const WorkoutNumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const WorkoutNum = styled.div`
  padding: 20px 2px 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .line {
    width: 3px;
    height: 100px;
    align-items: stretch;
    border-radius: 10px;
    background: ${theme.Netural300};
  }

  &:last-child .line {
    display: none;
  }
`

export const NumCircle = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 38.571px;
  background: ${theme.Netural700};
  color: ${theme.Netural0};
  ${fonts.d2}
`

export const PlaceholderWrapper = styled.div<{
  isVisible: boolean
  top: string
}>`
  position: absolute;
  height: 150px;
  width: 770px;
  border-radius: 20px;
  z-index: 1;
  pointer-events: none;
  top: ${({ top }) => top};
  background: ${({ isVisible }) =>
    isVisible ? `${theme.Netural300}` : "transparent"};
  transition:
    background 0.2s ease,
    border 0.2s ease;
`
