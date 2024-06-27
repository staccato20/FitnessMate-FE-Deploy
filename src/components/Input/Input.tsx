import InputLabel from "./components/InputLabel"
import InputInput from "./components/InputInput"
import InputError from "./components/InputError"
import InputSelect from "./components/InputSelect"
import InputText from "./components/InputText"

const InputMain = ({children}) => children

const Input = Object.assign(InputMain, {
	Label: InputLabel,
	Input: InputInput,
	Text: InputText,
	Select: InputSelect,
	Error: InputError,
})

export default Input
