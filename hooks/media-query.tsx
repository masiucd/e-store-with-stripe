import { useEffect, useState } from "react"
import { useShouldRender } from "@hooks/should-render"

// const isOnClient = typeof window !== "undefined"

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)
  const isMounted = useShouldRender()

  useEffect(() => {
    const media = isMounted ? window.matchMedia(query) : null

    if (media && matches !== media?.matches) {
      setMatches(media?.matches)
    }

    const listener = (): void => {
      setMatches(media?.matches ?? false)
    }

    media?.addEventListener("change", listener)
    return () => {
      media?.removeEventListener("change", listener)
    }
  }, [isMounted, matches, query])

  return matches
}
