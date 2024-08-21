import { ButtonHTMLAttributes } from "react"

import Icon from "@components/Icon/Icon"
import { BasicIconType } from "@components/Icon/utils/icons"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: BasicIconType
  onClick?: (e: React.MouseEvent) => void
}

const IconButton = ({ icon, onClick, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}>
      <Icon
        icon={icon}
        aria-hidden
      />
    </button>
  )
}

export default IconButton
