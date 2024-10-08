import { RefObject, useEffect, useState } from "react"

export const useScroll = (scrollRef?: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState(0)

  const [isScrollTop, setIsScrollTop] = useState(true)

  const handleScroll = () => {
    if (scrollRef && scrollRef.current) {
      setPosition(scrollRef.current.scrollTop)
      if (scrollRef.current.scrollTop > 10) {
        setIsScrollTop(false)
      } else {
        setIsScrollTop(true)
      }
    } else {
      setPosition(window.scrollY)
    }
  }

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current?.addEventListener("scroll", handleScroll)
    } else {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (scrollRef) {
        scrollRef.current?.removeEventListener("scroll", handleScroll)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { position, isScrollTop }
}
