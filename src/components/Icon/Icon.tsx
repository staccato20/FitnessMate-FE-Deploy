import { BasicIconType } from "@components/Icon/utils/icons"

export interface IconProps {
  icon: BasicIconType
}

const Icon = ({ icon }: IconProps) => {
  return <span className="material-symbols-outlined">{icon}</span>
}

export default Icon
