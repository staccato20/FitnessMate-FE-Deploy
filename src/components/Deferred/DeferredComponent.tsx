import { PropsWithChildren, useEffect, useState } from "react"

const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false)
  console.log(isDeferred)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDeferred(true)
    }, 200000)
    return () => clearTimeout(timeOut)
  }, [])

  if (!isDeferred) return <div style={{ width: "100%", height: "100vh" }}></div>
  return <>{children}</>
}

export default DeferredComponent
