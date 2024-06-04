import InputLabel from "./components/InputLabel"
import InputInput from "./components/InputInput"
import InputError from "./components/InputError"
import InputSelect from "./components/InputSelect"

const InputMain = ({children}) => children

const Input = Object.assign(InputMain, {
	Label: InputLabel,
	Input: InputInput,
	Select: InputSelect,
	Error: InputError,
})

export default Input
