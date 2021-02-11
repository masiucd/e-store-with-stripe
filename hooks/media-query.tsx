import { useEffect, useState } from "react"

const isOnClient = typeof window !== "undefined"
export const useMediaQuery = (width: number) => {
  const [media, setMedia] = useState(
    isOnClient ? window.matchMedia(`(min-width: ${width}px)`) : null
  )

  const updateWindowWidth = () => {
    setMedia(window.matchMedia(`(min-width: ${window.innerWidth}px)`))
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth)
    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }
  }, [])

  return media
}
