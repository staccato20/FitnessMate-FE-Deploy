import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import authAPI from "@apis/domain/auth"

import { LOGIN_INPUTS } from "@pages/Signup/LOGIN_INPUTS"
import { INPUT_STYLE } from "@pages/Signup/constatns/INPUT_STYLE"

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
      rememberMe: keepLoginRef && keepLoginRef.current?.checked,
    }
    const res = await authAPI.login(submission)
    console.log(res)

    // console.log(isKeepLoginClicked)
    // e.preventDefault()
    // const submission = {
    //   loginEmail: email,
    //   password: password,
    //   // (false일 경우 토큰관련 오류가 존재)??
    //   rememberMe: isKeepLoginClicked,
    // }
    // try {
    //   const res = await loginPostAPI.post("", submission)
    //   if (res.status === 200) {
    //     const accessToken = res.data.accessToken
    //     const refreshToken = res.data.refreshToken
    //     // 토큰 저장
    //     localStorage.setItem("accessToken", accessToken)
    //     localStorage.setItem("refreshToken", refreshToken)
    //     localStorage.setItem("rememberMe", isKeepLoginClicked)
    //     navigate("/")
    //   }
    // } catch (err) {
    //   setIsError(true)
    // }
  }

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
        <S.InputFrame>
          <Input>
            <Input.Input
              type="userName"
              props={{
                ...formAdapter({
                  register,
                  validator: LOGIN_INPUTS["userName"],
                  name: "userName",
                }),
                ...INPUT_STYLE.PROFILE,
              }}
            />
          </Input>
          <Input>
            <Input.Input
              type="password"
              props={{
                ...formAdapter({
                  register,
                  validator: LOGIN_INPUTS["password"],
                  name: "password",
                }),
                ...INPUT_STYLE.PROFILE,
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
