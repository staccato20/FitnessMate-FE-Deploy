import { ChangeEvent } from "react"

import { SIGNUP_LIST } from "@pages/Signup/constants/Constants"

export const createSignupList = (
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
) => [
  ...SIGNUP_LIST.slice(0, 3),
  {
    ...SIGNUP_LIST[3],
    onChange,
  },
]
