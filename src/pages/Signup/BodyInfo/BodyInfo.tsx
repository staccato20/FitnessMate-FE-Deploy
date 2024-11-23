import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"

import Input from "@components/Input/Input"
import ProgressBar from "@components/Progressbar/ProgressBar"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { SEX_GROUP, SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import { BodyInfoPayload } from "@typpes/type"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"
import { BODYINFO_LIST } from "../constants/Constants"

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
      <S.FormWrapper>
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
        {BODYINFO_LIST.map(({ id, label, name }) => (
          <Input key={id}>
            <Input.Label
              isRequired
              htmlFor={name}>
              {label}
            </Input.Label>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  validator: SIGNUP_INPUTS[name],
                  name,
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                }),
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
      </S.FormWrapper>
      <SignupButton $isValid={formState.isValid}>다음으로</SignupButton>
    </S.SignupForm>
  )
}

export default BodyInfo
