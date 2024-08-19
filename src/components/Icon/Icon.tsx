import { BasicIconType, icons } from "@components/Icon/utils/icons"

export interface IconProps {
  icon: BasicIconType
}

const Icon = ({ icon }: IconProps) => {
  return (
    <span className="material-symbols-outlined">
      {icons.includes(icon) ? icon : ""}
    </span>
  )
}

export default Icon
