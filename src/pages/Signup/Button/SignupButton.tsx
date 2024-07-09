// @ts-nocheck
import { useNavigate } from "react-router-dom"

import BeforeButton from "@components/Button/BeforeButton"
import MiddleButton from "@components/Button/MiddleButton"

import * as S from "../StyledSignup"

const SignupButton = ({ children, $isValid }) => {
  const navigate = useNavigate()

  const handleBackPage = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <S.ButtonContainer>
      <BeforeButton onClick={handleBackPage} />
      <MiddleButton
        type="submit"
        disabled={!$isValid}
        $isValid={$isValid}>
        {children}
      </MiddleButton>
    </S.ButtonContainer>
  )
}

export default SignupButton
