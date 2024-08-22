import { ButtonHTMLAttributes } from "react"

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
