import { RefObject, useEffect } from "react"

function OutSideClick(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback?.()
      }
    }

    window.addEventListener("mousedown", handleClick)

    return () => window.removeEventListener("mousedown", handleClick)
  }, [ref, callback])
}

export default OutSideClick
