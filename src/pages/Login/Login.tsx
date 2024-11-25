import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { LOGIN_INPUTS, LOGIN_LIST } from "constants/validation"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import { useLogin } from "@hooks/mutation/useLogin"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledLogin"

const Login = () => {
  const { handleSubmit, register, getValues } = useForm({
    mode: "onChange",
    defaultValues: LOGIN_INPUTS.DEFAULT_VALUES,
  })

  const navigate = useNavigate()
  const { mutate: login } = useLogin()
  const rememberMeState = useRef<HTMLInputElement>(null)

  const handleSignup = () => {
    navigate("/signup/profile")
  }

  const handleLogin = () => {
    const userName = getValues("userName")
    const password = getValues("password")
    const submission = {
      loginEmail: userName,
      password,
      rememberMe: !!rememberMeState.current?.checked,
    }

    login(submission)
  }

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
        <S.InputFrame>
          {LOGIN_LIST.map(({ id, name }) => (
            <Input key={id}>
              <Input.Input
                props={{
                  ...formAdapter({
                    register,
                    validator: LOGIN_INPUTS[name],
                    name,
                  }),
                }}
              />
            </Input>
          ))}
          <S.Option>
            <S.Auto>
              <S.AutoCheckBox
                type="checkbox"
                id="rememberMe"
                ref={rememberMeState}
              />
              <S.AutoLabel htmlFor="rememberMe">로그인 유지</S.AutoLabel>
            </S.Auto>
            <S.FindPass>비밀번호 찾기</S.FindPass>
          </S.Option>
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
