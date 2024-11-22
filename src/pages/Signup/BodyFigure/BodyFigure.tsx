import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"

import styled from "styled-components"

import ProgressBar from "@components/Progressbar/ProgressBar"

import authAPI from "@apis/domain/auth"

import Figure from "@pages/Signup/BodyFigure/components/Figure/Figure"
import Ratio from "@pages/Signup/BodyFigure/components/Ratio/Ratio"
import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { CATEGORY_LIST } from "@pages/Signup/constants/Constants"

import { BodyFigureData } from "@typpes/type"

import { useRatio } from "@hooks/useRatio"
import { useSelectFigure } from "@hooks/useSelectFigure"
import { useSelectMenu } from "@hooks/useSelectMenu"

import * as S from "../StyledSignup"

const BodyFigure = () => {
  const { ratioValue, ratioText, handleRatio } = useRatio()

  const { selectedMenu, handleSelectMenu } = useSelectMenu()
  const { selectedFigure, handleSelectFigure } = useSelectFigure()
  const methods = useForm<BodyFigureData>({
    mode: "onChange",
  })
  const { formState, handleSubmit, getValues } = methods
  const { profile, bodyinfo } = useSignupStore()
  const navigate = useNavigate()

  const onSubmit = async (bodyfigureData: BodyFigureData) => {
    const { bodyFat, muscleMass } = bodyfigureData
    if (formState.isValid) {
      const submission = {
        ...profile,
        ...bodyinfo,
        ...{
          upDownBalance: ratioValue / 10.0,
          bodyFat:
            selectedMenu === 0 ? CATEGORY_LIST[selectedFigure][1][0] : bodyFat,
          muscleMass:
            selectedMenu === 0
              ? CATEGORY_LIST[selectedFigure][1][1]
              : muscleMass,
        },
      }
      // try {
      //   const response = await authAPI.postUser(submission)
      //   if (response.status === 200) {
      //     navigate("/signup/complete")
      //   }
      // } catch (error) {
      //   console.log(error)
      // }
    }
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
        <FormProvider {...methods}>
          <Figure
            selectedMenu={selectedMenu}
            handleSelectMenu={handleSelectMenu}
            selectedFigure={selectedFigure}
            handleSelectFigure={handleSelectFigure}
          />
        </FormProvider>
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
