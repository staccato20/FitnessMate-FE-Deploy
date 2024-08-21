import { BasicIconType, icons } from "@components/Icon/utils/icons"

export interface IconProps {
  icon: BasicIconType
}

const Icon = ({ icon }: IconProps) => {
  return icons.includes(icon) ? (
    <span className="material-symbols-outlined">{icon}</span>
  ) : (
    ""
  )
}

export default Icon
