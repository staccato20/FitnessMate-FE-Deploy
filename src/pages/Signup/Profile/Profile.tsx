import { ChangeEvent } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"
import { omit } from "lodash"

import styled from "styled-components"

import Input from "@components/Input/Input"
import ProgressBar from "@components/Progressbar/ProgressBar"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"

const Profile = () => {
  const { setProfile } = useSignupStore()

  const navigate = useNavigate()

  const { handleSubmit, formState, register, getValues, trigger } = useForm<
    typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE
  >({
    mode: "onChange",
    defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["PROFILE"],
  })

  const onSubmit: SubmitHandler<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE> = (
    formValue,
  ) => {
    if (formState.isValid) {
      const updatedProfoile = omit(formValue, ["passwordCheck"])
      setProfile(updatedProfoile)
      navigate(`/signup/bodyinfo`)
    }
  }

  const triggerPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    register("password").onChange(e)
    if (formState.dirtyFields.passwordCheck) {
      trigger("passwordCheck")
    }
  }

  const checkPassWord = (value: string) =>
    value === getValues("password") || "비밀번호가 일치하지 않습니다."

  return (
    <S.SignupWrapper>
      <S.SignupTitle>
        <ProgressBar progress={1} />
        회원 정보를 입력해주세요
      </S.SignupTitle>
      <ProfileFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.Label
            isRequired
            htmlFor="userName">
            이름
          </Input.Label>
          <Input.Input
            props={formAdapter({
              register,
              name: "userName",
              validator: SIGNUP_INPUTS["userName"],
              $isDirty: !!formState.dirtyFields.userName,
              $isError: !!formState.errors.userName,
            })}
          />
          <Input.Error>{formState.errors?.userName?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="birthDate">
            생년월일
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["birthDate"],
                name: "birthDate",
                $isDirty: !!formState.dirtyFields.birthDate,
                $isError: !!formState.errors.birthDate,
              }),
            }}
          />
          <Input.Error>{formState.errors?.birthDate?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="loginEmail">
            이메일
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["loginEmail"],
                name: "loginEmail",
                $isDirty: !!formState.dirtyFields.loginEmail,
                $isError: !!formState.errors.loginEmail,
              }),
            }}
          />
          <Input.Error>{formState.errors?.loginEmail?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="password">
            비밀번호
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["password"],
                name: "password",
                $isDirty: !!formState.dirtyFields.password,
                $isError: !!formState.errors.password,
                onChange: triggerPasswordCheck,
              }),
            }}
          />
          <Input.Error>{formState.errors?.password?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="passwordCheck">
            비밀번호 확인
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: {
                  ...SIGNUP_INPUTS["passwordCheck"],
                  validate: { validate: checkPassWord },
                },
                name: "passwordCheck",
                $isDirty: !!formState.dirtyFields.passwordCheck,
                $isError: !!formState.errors.passwordCheck,
              }),
            }}
          />
          <Input.Error>{formState.errors?.passwordCheck?.message}</Input.Error>
        </Input>
      </ProfileFormWrapper>
      <SignupButton
        $isValid={formState.isValid}
        nextUrl="bodyinfo"
      />
    </S.SignupWrapper>
  )
}

export default Profile

const ProfileFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`
