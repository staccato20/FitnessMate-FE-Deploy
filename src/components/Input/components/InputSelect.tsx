import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form"
import { Fragment } from "react/jsx-runtime"

import styled from "styled-components"

import theme from "@styles/theme"

interface SelectGroup<T extends FieldValues, K extends Path<T>> {
  groupName: PathValue<T, K>
  imgSrc: string
  id: number
}

interface InputSelectProps<T extends FieldValues, K extends Path<T>> {
  name: Path<T>
  list: SelectGroup<T, K>[]
  methods: UseFormReturn<T>
}

const InputSelect = <T extends FieldValues, K extends Path<T>>({
  list,
  methods,
  name,
}: InputSelectProps<T, K>) => {
  const { register, getValues, setValue } = methods

  const handleClick = (value: PathValue<T, Path<T>>) => {
    setValue(name, value, { shouldValidate: true })
  }

  return (
    <SelectList>
      {list.map(({ groupName, imgSrc, id }) => (
        <Fragment key={id}>
          <input
            type="radio"
            id={name}
            value={groupName}
            aria-label={groupName}
            {...register(name)}
          />
          <SelectItem
            onClick={() => {
              handleClick(groupName)
            }}
            type="button"
            $isChecked={getValues(name) === groupName}>
            <SelectImg
              src={imgSrc}
              alt={groupName}
            />
            <SelectText $isChecked={getValues(name) === groupName}>
              {groupName}
            </SelectText>
          </SelectItem>
        </Fragment>
      ))}
    </SelectList>
  )
}

export default InputSelect

const SelectList = styled.div`
  display: flex;
  gap: 10px;
  input {
    display: none;
  }
`

const SelectItem = styled.button<{ $isChecked: boolean }>`
  transition: all 0.3s ease-out;
  border-radius: 16px;
  background: ${({ $isChecked }) =>
    $isChecked ? theme.Netural100 : theme.Netural0};
  border: ${({ $isChecked }) =>
    $isChecked ? `3px solid ${theme.Brand600}` : `3px solid transparent`};
  display: flex;
  width: 126px;
  height: 126px;
  padding: 18px 32px 19px 31px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  &:hover {
    background: ${theme.Netural100};
    border: 3px solid
      ${({ $isChecked }) =>
        $isChecked ? `${theme.Brand600}` : `${theme.Netural300}`};
  }
`
const SelectImg = styled.img`
  width: 60px;
  height: 60px;
`

const SelectText = styled.span<{ $isChecked: boolean }>`
  transition: all 0.3s ease-out;
  color: ${({ $isChecked }) =>
    $isChecked ? theme.Brand950 : theme.Netural800};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
`
