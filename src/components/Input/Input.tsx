// @ts-nocheck
import InputError from "@components/Input/components/InputError"
import InputInput from "@components/Input/components/InputInput"
import InputLabel from "@components/Input/components/InputLabel"
import InputSelect from "@components/Input/components/InputSelect"
import InputText from "@components/Input/components/InputText"

const InputMain = ({ children }) => children

const Input = Object.assign(InputMain, {
  Label: InputLabel,
  Input: InputInput,
  Text: InputText,
  Select: InputSelect,
  Error: InputError,
})

export default Input
