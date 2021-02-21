import { ScrollDirection, ScrollY } from "@utils/types"
import { useEffect, useState } from "react"

const useScrollY = (): ScrollY => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("idle")
  const [scrollOffSet, setScrollOffSet] = useState(0)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = typeof window !== "undefined" ? window.scrollY : 0

      if (scrollY === 0) {
        setScrollDirection("idle")
      } else if (scrollY > scrollOffSet) {
        setScrollDirection("down")
      } else if (scrollY < scrollOffSet) {
        setScrollDirection("up")
      }
      setScrollOffSet(scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollOffSet])

  return { y: scrollOffSet, scrollDirection }
}

export { useScrollY }
