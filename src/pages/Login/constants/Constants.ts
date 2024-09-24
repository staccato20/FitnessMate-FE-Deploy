export const LOGIN_INPUTS = {
  DEFAULT_VALUES: {
    userName: "",
    password: "",
  },
  userName: {
    attributes: {
      placeholder: "아이디",
    },
    validate: {
      required: { value: true },
    },
  },
  password: {
    attributes: {
      placeholder: "비밀번호",
    },
    validate: {
      required: { value: true },
    },
  },
}
