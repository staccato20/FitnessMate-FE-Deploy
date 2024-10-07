import { useFormContext } from "react-hook-form"

import IconButton from "@components/IconButton/IconButton"

import * as S from "./StyledSearchField"

interface SearchFieldProps {
  placeholder?: string
  width?: string
  name: string
  triggerSubmit: () => void
}

const SearchField = ({
  placeholder,
  width = "auto",
  name,
  triggerSubmit,
}: SearchFieldProps) => {
  const methods = useFormContext()

  const handleClose = () => {
    methods.setValue(name, "")
  }

  return (
    <S.InputWrapper $width={width}>
      <S.Input
        placeholder={placeholder}
        {...methods.register(name)}
      />
      <S.IconButtonWrapper>
        <IconButton
          icon="CloseWhite"
          onClick={handleClose}
        />
        <IconButton
          icon="SearchWhite"
          onClick={triggerSubmit}
        />
      </S.IconButtonWrapper>
    </S.InputWrapper>
  )
}

export default SearchField
