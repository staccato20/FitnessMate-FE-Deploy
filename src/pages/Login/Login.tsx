import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { LOGIN_INPUTS } from "constants/validation"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import authAPI from "@apis/domain/auth"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledLogin"

const Login = () => {
  const keepLoginRef = useRef<HTMLInputElement>(null)

  const methods = useForm({
    mode: "onChange",
    defaultValues: LOGIN_INPUTS.DEFAULT_VALUES,
  })

  const { handleSubmit, register, getValues } = methods

  const navigate = useNavigate()

  const handleSignup = () => {
    navigate("/signup/profile")
  }

  const handleAuto = () => {
    if (keepLoginRef && keepLoginRef.current) {
      keepLoginRef.current.checked = !keepLoginRef.current.checked
    }
  }

  const handleLogin = async () => {
    const userName = getValues("userName")
    const password = getValues("password")
    const submission = {
      loginEmail: userName,
      password,
      rememberMe: keepLoginRef && !!keepLoginRef.current?.checked,
    }
    try {
      const res = await authAPI.login(submission)
      if (res.status === 200) {
        const { accessToken, refreshToken, rememberMe } = res.data

        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", rememberMe.toString())
        navigate("/")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
        <S.InputFrame>
          <Input>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  validator: LOGIN_INPUTS["userName"],
                  name: "userName",
                }),
              }}
            />
          </Input>
          <Input>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  validator: LOGIN_INPUTS["password"],
                  name: "password",
                }),
              }}
            />
          </Input>
          <S.AutomaticLogin onClick={handleAuto}>
            <S.AutoCheckBox
              type="checkbox"
              ref={keepLoginRef}
            />
            <S.AutomaticLoginLabel htmlFor="keepLogin">
              로그인 유지
            </S.AutomaticLoginLabel>
          </S.AutomaticLogin>
        </S.InputFrame>

        <S.ButtonContainer>
          <Button
            onClick={handleLogin}
            variant="main"
            type="submit"
            size="lg">
            로그인
          </Button>
          <Button
            onClick={handleSignup}
            variant="weak"
            size="lg">
            회원가입
          </Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginContainer>
  )
}

export default Login
