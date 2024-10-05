import { RefObject, useEffect, useState } from "react"

export const useScroll = (scrollRef: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState(0)
  console.log(position)

  const [isScrollTop, setIsScrollTop] = useState(true)

  const handleScroll = () => {
    if (!scrollRef.current) {
      return
    }
    setPosition(scrollRef.current.scrollTop)
    if (scrollRef.current.scrollTop > 10) {
      setIsScrollTop(false)
    } else {
      setIsScrollTop(true)
    }
  }

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll)
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return [position, isScrollTop]
}
