import { ButtonHTMLAttributes } from "react"

import Icon, { ICON_MAP } from "@components/Icon/Icon"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof ICON_MAP
}

const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <button {...props}>
      <Icon
        icon={icon}
        aria-hidden
      />
    </button>
  )
}

export default IconButton
