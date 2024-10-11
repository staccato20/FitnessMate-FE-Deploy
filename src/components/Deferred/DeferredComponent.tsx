import { PropsWithChildren, useEffect, useState } from "react"

const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDeferred(true)
    }, 200)
    return () => clearTimeout(timeOut)
  }, [])

  if (!isDeferred) return null
  return <>{children}</>
}

export default DeferredComponent
