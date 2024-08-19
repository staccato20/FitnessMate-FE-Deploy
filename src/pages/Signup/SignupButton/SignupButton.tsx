// @ts-nocheck
import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import * as S from "../StyledSignup"

const SignupButton = ({ children, $isValid }) => {
  const navigate = useNavigate()

  const handleBackPage = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <S.ButtonContainer>
      <Button
        onClick={handleBackPage}
        variant="weak"
        size="lg">
        이전
      </Button>
      <Button
        type="submit"
        onClick={handleBackPage}
        variant="main"
        disabled={!$isValid}
        size="lg">
        다음
      </Button>
    </S.ButtonContainer>
  )
}

export default SignupButton
