import { ReactNode } from "react"

interface InputTextProps {
  children: ReactNode
}

const Icon = ({ children }: InputTextProps) => {
  return <>{children}</>
}

export default Icon
