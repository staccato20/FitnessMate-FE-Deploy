import { FormProvider, useForm } from "react-hook-form"

import { useSignupStore } from "@store/useSignupStore"

import styled from "styled-components"

import ProgressBar from "@components/Progressbar/ProgressBar"

import Figure from "@pages/Signup/BodyFigure/components/Figure/Figure"
import { FigureProvider } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"
import Ratio from "@pages/Signup/BodyFigure/components/Ratio/Ratio"
import SignupButton from "@pages/Signup/SignupButton/SignupButton"

import { BodyFigureData } from "@typpes/type"

import { useRatio } from "@hooks/useRatio"

import * as S from "../StyledSignup"

const BodyFigure = () => {
  const { ratioValue, ratioText, handleRatio } = useRatio()

  const methods = useForm<BodyFigureData>({
    mode: "onChange",
  })

  const { formState, handleSubmit, getValues } = methods
  const { profile, bodyinfo } = useSignupStore()

  const onSubmit = async (bodyfigureData: BodyFigureData) => {
    // const { bodyFat, muscleMass } = bodyfigureData
    // if (formState.isValid) {
    //   const submission = {
    //     ...profile,
    //     ...bodyinfo,
    //     ...{
    //       upDownBalance: ratioValue / 10.0,
    //       bodyFat:,
    //       muscleMass:
    //     },
    //   }
    // }
  }

  return (
    <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
      <S.SignupTitle>
        <ProgressBar progress={3} />
        체형 정보를 입력해주세요
      </S.SignupTitle>
      <BodyFigureWrapper>
        <Ratio
          ratioValue={ratioValue}
          ratioText={ratioText}
          handleRatio={handleRatio}
        />
        <FigureProvider>
          <FormProvider {...methods}>
            <Figure />
          </FormProvider>
        </FigureProvider>
      </BodyFigureWrapper>
      <SignupButton $isValid={formState.isValid}>회원가입 완료</SignupButton>
    </S.SignupForm>
  )
}

export default BodyFigure

const BodyFigureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`
