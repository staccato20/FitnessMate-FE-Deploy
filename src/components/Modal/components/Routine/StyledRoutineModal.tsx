import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const ContentWrapper = styled.div`
  height: 217px;
  width: 100%;
`

export const ContentForm = styled.form`
  display: flex;
  gap: 12px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentInput = styled.input<{ $isError: boolean }>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1}
  }
  text-align: center;
  width: 100%;
  min-height: 36px;
  ${fonts.h1};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural900)};

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
`
export const ContentInputLabel = styled.span<{ $isError: boolean }>`
  ${fonts.b7};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural450)};
`

export const ContentMachineForm = styled(ContentForm)`
  gap: 31px;
`

export const MachineInput = styled.input`
  color: ${theme.Netural800};
  ${fonts.h1};
  font-weight: 500;
  font-size: 28px;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.Netural200};
  text-align: center;

  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1};
    font-weight: 500;
  }

  min-height: 61px;
  width: 61px;

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
`

export const MachineInputList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const MachineInputItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  &:first-child input {
    width: 80px;
  }
`

export const Unit = styled.span`
  color: ${theme.Netural600};
  ${fonts.h3};
  font-weight: 500;
`

export const MachineButton = styled.button`
  text-align: center;
  color: ${theme.Netural700};
  ${fonts.b4};
`

export const ContentBigWrapper = styled.div`
  max-height: 336px;
  height: 100%;
  width: 100%;
  padding-bottom: 24px;
`

export const AddRoutineButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${theme.Netural800};
  ${fonts.b2};
  padding: 16px 12px 20px 12px;
  width: 100%;
`

export const RoutineList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  overflow: auto;
  max-height: 250px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`

export const RoutineItem = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
  background: ${({ $isSelected }) =>
    $isSelected ? theme.Netural150 : theme.Netural0};
`

export const RoutineName = styled.span<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected ? theme.Brand600 : theme.Netural800};
  ${fonts.b2};
`

export const RoutineState = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6};
`