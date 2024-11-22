import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"

import styled from "styled-components"

import Input from "@components/Input/Input"
import ProgressBar from "@components/Progressbar/ProgressBar"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { SEX_GROUP, SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import { BodyInfoPayload } from "@typpes/type"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"

const BodyInfo = () => {
  const methods = useForm<BodyInfoPayload>({
    mode: "onChange",
  })

  const { formState, handleSubmit, register } = methods
  const { setBodyInfo } = useSignupStore()
  const navigate = useNavigate()

  const onSubmit = (bodyInfoForm: BodyInfoPayload) => {
    const { height, weight } = bodyInfoForm
    if (formState.isValid) {
      setBodyInfo({
        ...bodyInfoForm,
        height: Number(height),
        weight: Number(weight),
      })
      navigate("/signup/bodyfigure")
    }
  }

  return (
    <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
      <S.SignupTitle>
        <ProgressBar progress={2} />
        신체 정보를 입력해주세요
      </S.SignupTitle>
      <BodyInfoContainer>
        <Input>
          <Input.Label
            isRequired
            htmlFor="sex">
            성별
          </Input.Label>
          <Input.Select
            name="sex"
            list={SEX_GROUP}
            methods={methods}
          />
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="height">
            키
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["height"],
                name: "height",
                $isDirty: !!formState.dirtyFields.height,
                $isError: !!formState.errors.height,
              }),
            }}
          />
          <Input.Error>{formState.errors?.height?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="weight">
            몸무게
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["weight"],
                name: "weight",
                $isDirty: !!formState.dirtyFields.weight,
                $isError: !!formState.errors.weight,
              }),
            }}
          />
          <Input.Error>{formState.errors?.weight?.message}</Input.Error>
        </Input>
      </BodyInfoContainer>
      <SignupButton $isValid={formState.isValid} />
    </S.SignupForm>
  )
}

export default BodyInfo

const BodyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
`
