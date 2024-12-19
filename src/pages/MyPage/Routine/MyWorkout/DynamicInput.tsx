import React, { useEffect, useRef, useState } from "react"

import * as S from "./StyledMyWorkout"

interface DynamicInputProps {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DynamicInput = ({ value, placeholder, onChange }: DynamicInputProps) => {
  const [width, setWidth] = useState(30)
  const spanRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      setWidth(spanRef.current.offsetWidth + 17)
      inputRef.current.focus()
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "")
    onChange({ ...e, target: { ...e.target, value: newValue } })

    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth + 17)
    }
  }

  return (
    <S.HeaderRightInfoArea width={`${width}px`}>
      <S.HeaderRightInfoInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        maxLength={2}
      />
      <S.InputWidthItem ref={spanRef}>{value || placeholder}</S.InputWidthItem>
      <S.CustomCursor />
    </S.HeaderRightInfoArea>
  )
}

export default DynamicInput
