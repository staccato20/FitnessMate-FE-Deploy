import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { userPostAPI } from "../../../apis/API"
import StatusBar from "../../../components/StatusBar/StatusBar"
import useSignupStore from "../../../stores/store"
import SignupButton from "../Button/SignupButton"
import * as GS from "../StyledSignup"
import * as S from "./StyledBodyFigure"
import Figure from "./components/Figure/Figure"
import Ratio from "./components/Ratio/Ratio"
import { CATEGORY_LIST } from "./constants/CATEGORY_LIST"
import { useSelectFigure } from "./hooks/useSelectFigure"
import { useSelectMenu } from "./hooks/useSelectMenu"
import { useSlide } from "./hooks/useSlide"

const BodyFigure = () => {
  const { ratioValue, ratioText, handleRatio } = useSlide()
  const { selectedMenu, handleSelectMenu } = useSelectMenu()
  const { selectedFigure, handleSelectFigure } = useSelectFigure()
  const methods = useForm({
    mode: "onChange",
  })
  const { formState, handleSubmit, getValues } = methods
  const { profile, bodyinfo } = useSignupStore()
  const navigate = useNavigate()

  const onSubmit = async () => {
    if (formState.isValid) {
      const submission = {
        ...profile,
        ...bodyinfo,
        ...{
          upDownBalance: parseFloat(ratioValue / 10),
          bodyFat:
            selectedMenu === 0
              ? CATEGORY_LIST[selectedFigure][1][0]
              : parseInt(getValues("bodyFat")),
          muscleMass:
            selectedMenu === 0
              ? CATEGORY_LIST[selectedFigure][1][1]
              : parseInt(getValues("muscleMass")),
        },
      }

      try {
        const response = await userPostAPI.post("", submission)
        if (response.status === 200) {
          navigate("/signup/complete")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <GS.SignupForm onSubmit={handleSubmit(onSubmit)}>
      <GS.SignupTitle>
        <StatusBar status={"3"} />
        체형 정보를 입력해주세요
      </GS.SignupTitle>
      <S.BodyFigureWrapper>
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
      </S.BodyFigureWrapper>
      <SignupButton $isValid={formState.isValid}>회원가입 완료</SignupButton>
    </GS.SignupForm>
  )
}

export default BodyFigure
