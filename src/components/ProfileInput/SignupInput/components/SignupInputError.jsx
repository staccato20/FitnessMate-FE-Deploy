import * as S from "../StyledSignupInput.js"
const SignupInputError = ({children}) => {
	console.log(children)
	return <S.InputWarning>{children}</S.InputWarning>
}
export default SignupInputError
