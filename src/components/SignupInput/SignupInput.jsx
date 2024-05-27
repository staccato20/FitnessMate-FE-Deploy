import SignupInputLabel from "./components/SignupInputLabel"
import SignupInputInput from "./components/SignupInputInput"
import SignupInputError from "./components/SignupInputError"
import SignupInputSelect from "./components/SignupInputSelect"

const SignupInputMain = ({children}) => children

export const SignupInput = Object.assign(SignupInputMain, {
	Label: SignupInputLabel,
	Input: SignupInputInput,
	Select: SignupInputSelect,
	Error: SignupInputError,
})
