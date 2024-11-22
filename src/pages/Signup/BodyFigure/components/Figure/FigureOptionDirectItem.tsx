import { useFormContext } from "react-hook-form"

import Input from "@components/Input/Input"

import { SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledFigure"

const BodyFigureData = [
  { name: "muscleMass", label: "골격근량" },
  { name: "bodyFat", label: "체지방량" },
] as const

const FigureOptionDirectItem = () => {
  const { register, formState } = useFormContext()

  return (
    <S.FigureOptionDirectItemWrapper>
      <S.FigureOptionDirectItemList>
        {BodyFigureData.map(({ name, label }) => (
          <S.FigureOptionDirectItemOption>
            <S.FigureOptionDirectItemOptionBox>
              <Input>
                <Input.Label htmlFor={name}>{label}</Input.Label>
                <S.FigureOptionInputWrapper>
                  <Input.Input
                    props={formAdapter({
                      register,
                      name,
                      validator: SIGNUP_INPUTS[name],
                      $isDirty: !!formState.dirtyFields[name],
                      $isError: !!formState.errors[name],
                    })}
                  />
                  <Input.Text>kg</Input.Text>
                </S.FigureOptionInputWrapper>
              </Input>
            </S.FigureOptionDirectItemOptionBox>
          </S.FigureOptionDirectItemOption>
        ))}
      </S.FigureOptionDirectItemList>
      <S.FigureOptioneDirectItemMessage>
        <S.FigureOptioneDirectItemInnerMessage>
          어떻게 알 수 있나요?
        </S.FigureOptioneDirectItemInnerMessage>
        <S.FigureOptioneDirectItemInnerMessage2>
          골격근량과 체지방량은 In-body 기계를 통해 측정 가능해요{" "}
        </S.FigureOptioneDirectItemInnerMessage2>
      </S.FigureOptioneDirectItemMessage>
    </S.FigureOptionDirectItemWrapper>
  )
}

export default FigureOptionDirectItem
