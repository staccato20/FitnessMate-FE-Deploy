// @ts-nocheck
import Input from "@components/Input/Input"

import { SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import theme from "@styles/theme"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledProfile"

const INPUT_STYLE = {
  PROFILE: { background: `${theme.Netural100}` },
  FIGURE: {
    background: `${theme.Netural0}`,
    width: "70px",
    border: "1px solid #A2B2C2",
  },
}

const ProfileForm = ({
  methods: { register, formState, trigger, getValues },
}) => {
  const checkPassWord = (value) =>
    value === getValues("password") || "비밀번호가 일치하지 않습니다."

  return (
    <S.ProfileFormWrapper>
      <Input>
        <Input.Label
          isRequired
          htmlFor="userName">
          이름
        </Input.Label>
        <Input.Input
          props={{
            ...formAdapter({
              register,
              validator: SIGNUP_INPUTS["userName"],
              name: "userName",
              $isDirty: formState.dirtyFields.userName,
              $isError: formState.errors.userName,
            }),
            ...INPUT_STYLE.PROFILE,
          }}
        />
        <Input.Error>{formState.errors?.userName?.message}</Input.Error>
      </Input>
      <Input>
        <Input.Label
          isRequired
          htmlFor="birthDate">
          생년월일
        </Input.Label>
        <Input.Input
          props={{
            ...formAdapter({
              register,
              validator: SIGNUP_INPUTS["birthDate"],
              name: "birthDate",
              $isDirty: formState.dirtyFields.birthDate,
              $isError: formState.errors.birthDate,
            }),
            ...INPUT_STYLE.PROFILE,
          }}
        />
        <Input.Error>{formState.errors?.birthDate?.message}</Input.Error>
      </Input>
      <Input>
        <Input.Label
          isRequired
          htmlFor="loginEmail">
          이메일
        </Input.Label>
        <Input.Input
          props={{
            ...formAdapter({
              register,
              validator: SIGNUP_INPUTS["loginEmail"],
              name: "loginEmail",
              $isDirty: formState.dirtyFields.loginEmail,
              $isError: formState.errors.loginEmail,
            }),
            ...INPUT_STYLE.PROFILE,
          }}
        />
        <Input.Error>{formState.errors?.loginEmail?.message}</Input.Error>
      </Input>
      <Input>
        <Input.Label
          isRequired
          htmlFor="password">
          비밀번호
        </Input.Label>
        <Input.Input
          type={"password"}
          props={{
            ...formAdapter({
              register,
              validator: SIGNUP_INPUTS["password"],
              name: "password",
              $isDirty: formState.dirtyFields.password,
              $isError: formState.errors.password,
              onChange: (e) => {
                register("password").onChange(e)
                if (formState.dirtyFields.passwordCheck) {
                  trigger("passwordCheck")
                }
              },
            }),
            ...INPUT_STYLE.PROFILE,
          }}
        />
        <Input.Error>{formState.errors?.password?.message}</Input.Error>
      </Input>
      <Input>
        <Input.Label
          isRequired
          htmlFor="passwordCheck">
          비밀번호 확인
        </Input.Label>
        <Input.Input
          type={"password"}
          props={{
            ...formAdapter({
              register,
              validator: {
                ...SIGNUP_INPUTS["passwordCheck"],
                validate: {
                  required: {
                    value: true,
                    message: "비밀번호 확인은 필수 입력입니다.",
                  },
                  validate: checkPassWord,
                },
              },
              name: "passwordCheck",
              $isDirty: formState.dirtyFields.passwordCheck,
              $isError: formState.errors.passwordCheck,
            }),
            ...INPUT_STYLE.PROFILE,
          }}
        />
        <Input.Error>{formState.errors?.passwordCheck?.message}</Input.Error>
      </Input>
    </S.ProfileFormWrapper>
  )
}

export default ProfileForm
