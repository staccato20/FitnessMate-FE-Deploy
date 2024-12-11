import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { EDIT_INPUTS, EDIT_LIST } from "constants/validation"
import { omit } from "lodash"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import { EditUserPasswordPayload } from "@typpes/type"

import { usePostEditPassword } from "@hooks/mutation/usePostEditPassword"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledEditProfile"

interface PasswordPayload extends EditUserPasswordPayload {
  newPasswordCheck: string
}

const EditPassword = () => {
  const navigate = useNavigate()
  const { mutate: editPassword } = usePostEditPassword()

  const { register, formState, handleSubmit } = useForm<PasswordPayload>({
    mode: "onChange",
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordCheck: "",
    },
  })

  const onSubmit = (formValue: PasswordPayload) => {
    const editedPasswordPayload = omit(formValue, ["newPasswordCheck"])
    editPassword(editedPasswordPayload)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <S.EditProfileForm
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
      <S.EditFormWrapper>
        <S.EditProfileTitle>비밀번호 변경</S.EditProfileTitle>
        <S.EditProfileList>
          {EDIT_LIST.PASSWORD.map(({ id, name, label }) => (
            <Input
              key={id}
              style={{
                marginTop: id === EDIT_LIST.PASSWORD.length - 1 ? "-29px" : "0",
              }}>
              {label && (
                <Input.Label
                  htmlFor={name}
                  isRequired>
                  {label}
                </Input.Label>
              )}
              <Input.Input
                variant="edit"
                props={{
                  ...formAdapter({
                    register,
                    name,
                    validator: EDIT_INPUTS.PASSWORD[name],
                    $isDirty: !!formState.dirtyFields[name],
                    $isError: !!formState.errors[name],
                  }),
                }}
              />
              <Input.Error>{formState?.errors[name]?.message}</Input.Error>
            </Input>
          ))}
        </S.EditProfileList>
      </S.EditFormWrapper>
      <S.EditButtonContainer>
        <Button
          variant="text"
          size="full"
          type="button"
          onClick={handleBack}>
          이전
        </Button>

        <Button
          variant="main"
          size="full"
          type="submit">
          비밀번호 변경 완료
        </Button>
      </S.EditButtonContainer>
    </S.EditProfileForm>
  )
}

export default EditPassword
