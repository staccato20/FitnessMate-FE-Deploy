import ButtonLeftIcon from "@components/Button/ButtonLeftIcon"
import ButtonRightIcon from "@components/Button/ButtonRightIcon"

import * as S from "./StyledButton"

const ButtonMain = ({ children, ...props }) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>
}

const Button = Object.assign(ButtonMain, {
  LeftIcon: ButtonLeftIcon,
  RightIcon: ButtonRightIcon,
})

export default Button
