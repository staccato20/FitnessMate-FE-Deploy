// @ts-nocheck
import ImageSelect from "@components/ImageSelect/ImageSelect"
import { SelectList } from "@components/ImageSelect/StyledImageImageSelect"

const InputSelect = ({ list, methods }) => {
  const { register, getValues, setValue } = methods

  const handleClick = (value) => {
    setValue("sex", value, { shouldValidate: true })
  }

  return (
    <SelectList>
      {list.map((sex) => (
        <ImageSelect
          key={sex}
          value={sex}
          $isChecked={getValues("sex") === sex}
          handleClick={handleClick}
          register={register("sex")}>
          {sex}
        </ImageSelect>
      ))}
    </SelectList>
  )
}

export default InputSelect
