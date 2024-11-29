import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { UPDATE_INPUTS, UPDATE_LIST } from "constants/validation"

import styled from "styled-components"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import { UpdateUserPayload } from "@typpes/type"
import { User } from "@typpes/type"

import { useEditProfile } from "@hooks/mutation/useEditProfile"
import { useUserInfo } from "@hooks/query/useUserInfo"

import theme, { fonts } from "@styles/theme"

import { formAdapter } from "@utils/formAdapter"

const UpdateProfile = () => {
  const navigate = useNavigate()

  const { userInfo } = useUserInfo()

  const { register, formState, handleSubmit, reset } = useForm<
    Omit<User, "sex">
  >({
    mode: "onChange",
    defaultValues: {
      userName: "",
      birthDate: "",
      loginEmail: "",
    },
  })
  const { mutate: editUser } = useEditProfile()

  const handleUpdatePaswordPage = () => {
    navigate("/mypage/password")
  }

  const handleHome = () => {
    navigate("/")
  }

  const onSubmit = ({ userName, birthDate }: UpdateUserPayload) => {
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

  return (
    <UpdateProfileForm
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
      <UpdateProfileTitle>{userInfo?.userName}님의 회원정보</UpdateProfileTitle>
      <UpdateProfileList>
        {UPDATE_LIST.PROFILE.map(({ id, name, label, isDisabled }) => (
          <Input key={id}>
            <Input.Label htmlFor={name}>{label}</Input.Label>
            <Input.Input
              variant="edit"
              props={{
                ...formAdapter({
                  register,
                  name,
                  validator: UPDATE_INPUTS.PROFILE[name],
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                }),
                disabled: isDisabled,
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
      </UpdateProfileList>
      <UpdatePasswordButton
        type="button"
        onClick={handleUpdatePaswordPage}>
        비밀번호 변경하기
      </UpdatePasswordButton>
      <UpdateButtonContainer>
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
      </UpdateButtonContainer>
    </UpdateProfileForm>
  )
}

export default UpdateProfile

export const UpdateProfileForm = styled.form`
  padding-top: 75px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 45px;
`

export const UpdateProfileTitle = styled.span`
  ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
`
export const UpdateProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`

export const UpdatePasswordButton = styled.button`
  color: ${theme.Brand700};
  ${fonts.b3};
  font-weight: 700;
  text-align: left;
  width: fit-content;
  padding-top: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: ${theme.Brand700};
  }
`

export const UpdateButtonContainer = styled.div`
  padding-top: 180px;
  display: flex;
  align-items: center;
`
