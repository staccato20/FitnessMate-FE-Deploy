import { useForm } from "react-hook-form"

import { useUserStore } from "@store/useUserStore"
import { UPDATE_INPUTS, UPDATE_LIST } from "constants/validation"

import styled from "styled-components"

import Input from "@components/Input/Input"

import { User } from "@typpes/type"

import theme, { fonts } from "@styles/theme"

import { formAdapter } from "@utils/formAdapter"

const UpdateProfile = () => {
  const { isLogin, user } = useUserStore()
  const { register } = useForm<Omit<User, "sex">>({
    mode: "onChange",
    defaultValues: {
      userName: user?.userName,
      birthDate: user?.birthDate,
      loginEmail: user?.loginEmail,
    },
  })

  if (!isLogin) {
    return null
  }

  return (
    <UpdateProfileForm>
      <UpdateProfileTitle>{user?.userName}님의 회원정보</UpdateProfileTitle>
      <UpdateProfileList>
        {UPDATE_LIST.PROFILE.map(({ id, name, label, isDisabled }) => (
          <Input key={id}>
            <Input.Label htmlFor={name}>{label}</Input.Label>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  name,
                  validator: UPDATE_INPUTS.PROFILE[name],
                }),
                disabled: isDisabled,
                defaultValue: name,
              }}
            />
          </Input>
        ))}
      </UpdateProfileList>
    </UpdateProfileForm>
  )
}

export default UpdateProfile

export const UpdateProfileForm = styled.form`
  padding-top: 100px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 52px;
  padding-bottom: 30px;
`

export const UpdateProfileTitle = styled.span`
  ${theme.Netural990};
  ${fonts.h1};
  font-size: 30px;
`
export const UpdateProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
