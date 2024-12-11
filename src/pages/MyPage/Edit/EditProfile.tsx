import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { EDIT_INPUTS, EDIT_LIST } from "constants/validation"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import { getBirthFormat } from "@pages/Signup/utils/getBirthFormat"

import { EditUserPayload } from "@typpes/type"
import { User } from "@typpes/type"

import { useEditProfile } from "@hooks/mutation/useEditProfile"
import { useUserInfo } from "@hooks/query/useUserInfo"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledEditProfile"

const EditProfile = () => {
  const navigate = useNavigate()

  const { userInfo } = useUserInfo()

  const { register, formState, handleSubmit, reset, watch, setValue, trigger } =
    useForm<Omit<User, "sex">>({
      mode: "onChange",
      defaultValues: {
        userName: "",
        birthDate: "",
        loginEmail: "",
      },
    })

  const birthDateValue = watch("birthDate")

  const { mutate: editUser } = useEditProfile()

  const handleEditPaswordPage = () => {
    navigate("/mypage/password")
  }

  const handleHome = () => {
    navigate("/")
  }

  const onSubmit = ({ userName, birthDate }: EditUserPayload) => {
    editUser({ userName, birthDate })
  }

  useEffect(() => {
    if (userInfo) {
      reset({
        userName: userInfo.userName,
        birthDate: userInfo.birthDate,
        loginEmail: userInfo.loginEmail,
      })
    }
  }, [userInfo, reset])

  useEffect(() => {
    setValue("birthDate", getBirthFormat(birthDateValue))
    trigger("birthDate")
  }, [birthDateValue, setValue, trigger])

  return (
    <S.EditProfileForm
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
      <S.EditFormWrapper>
        <S.EditProfileTitle>
          {userInfo?.userName}님의 회원정보
        </S.EditProfileTitle>
        <S.EditProfileList>
          {EDIT_LIST.PROFILE.map(({ id, name, label, isDisabled }) => (
            <Input key={id}>
              <Input.Label htmlFor={name}>{label}</Input.Label>
              <Input.Input
                variant="edit"
                props={{
                  ...formAdapter({
                    register,
                    name,
                    validator: EDIT_INPUTS.PROFILE[name],
                    $isDirty: !!formState.dirtyFields[name],
                    $isError: !!formState.errors[name],
                  }),
                  disabled: isDisabled,
                }}
              />
              <Input.Error>{formState?.errors[name]?.message}</Input.Error>
            </Input>
          ))}
        </S.EditProfileList>
        <S.EditPasswordButton
          type="button"
          onClick={handleEditPaswordPage}>
          비밀번호 변경하기
        </S.EditPasswordButton>
      </S.EditFormWrapper>
      <S.EditButtonContainer>
        <Button
          variant="text"
          size="full"
          type="button"
          onClick={handleHome}>
          취소
        </Button>

        <Button
          variant="main"
          size="full"
          type="submit">
          회원정보 변경 완료
        </Button>
      </S.EditButtonContainer>
    </S.EditProfileForm>
  )
}

export default EditProfile
