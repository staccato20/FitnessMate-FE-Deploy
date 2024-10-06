import styled from "styled-components"

import IconButton from "@components/IconButton/IconButton"

import theme from "@styles/theme"

interface SearchFieldProps {
  placeholder?: string
  width?: string
}

const SearchField = ({ placeholder, width = "auto" }: SearchFieldProps) => {
  return (
    <InputWrapper $width={width}>
      <Input placeholder={placeholder} />
      <IconButtonWrapper>
        <IconButton
          icon="CloseRound"
          onClick={() => {}}
        />
        <IconButton
          icon="Search"
          onClick={() => {}}
        />
      </IconButtonWrapper>
    </InputWrapper>
  )
}

const InputWrapper = styled.div<{ $width: string }>`
  display: flex;
  padding: 10px 12px 10px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${theme.Netural900};
  box-shadow: 0px 4px 23.4px 0px rgba(0, 0, 0, 0.15);
  width: ${({ $width }) => $width};
  height: 64px;
`

export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Input = styled.input`
  color: ${theme.Netural0};
  &::-webkit-input-placeholder {
    color: ${theme.Netural0};
  }
`

export default SearchField
