import SignupInputLabel from "./components/SignupInputLabel"
import SignupInputInput from "./components/SignupInputInput"
import SignupInputError from "./components/SignupInputError"

const SignupInputMain = ({children}) => children

export const SignupInput = Object.assign(SignupInputMain, {
	Label: SignupInputLabel,
	Input: SignupInputInput,
	Error: SignupInputError,
})
