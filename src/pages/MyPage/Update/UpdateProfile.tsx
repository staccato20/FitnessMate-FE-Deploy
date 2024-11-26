import { useForm } from "react-hook-form"

import { UPDATE_INPUTS, UPDATE_LIST } from "constants/validation"

import styled from "styled-components"

import Input from "@components/Input/Input"

import { User } from "@typpes/type"

import { useUserInfo } from "@hooks/query/useUserInfo"

import theme, { fonts } from "@styles/theme"

import { formAdapter } from "@utils/formAdapter"

const UpdateProfile = () => {
  const { data: { userName, loginEmail, birthDate } = {} } = useUserInfo()

  const { register } = useForm<Omit<User, "sex">>({
    mode: "onChange",
    defaultValues: {
      userName,
      birthDate,
      loginEmail,
    },
  })

  return (
    <UpdateProfileForm>
      <UpdateProfileTitle>{userName}님의 회원정보</UpdateProfileTitle>
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

export const UpdateProfileForm = styled.form``

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
