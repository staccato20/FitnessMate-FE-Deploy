import { NavButton } from "@components/Navbar/StyledNavbar"

import { useModal } from "@hooks/useModal"

const AlertModalButton = () => {
  const { onOpen } = useModal("운동")
  return (
    <NavButton
      onClick={onOpen}
      variant="text">
      내 운동
    </NavButton>
  )
}

export default AlertModalButton
