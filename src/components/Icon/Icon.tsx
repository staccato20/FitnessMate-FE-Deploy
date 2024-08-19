import { BasicIconType } from "@components/Icon/utils/icons"

interface IconProps {
  icon: BasicIconType
}

const Icon = ({ icon }: IconProps) => {
  return <span className="material-symbols-outlined">{icon}</span>
}

export default Icon
