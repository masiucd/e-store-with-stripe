import { useEffect, useState } from "react"

const isOnClient = typeof window !== "undefined"

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = isOnClient ? window.matchMedia(query) : null

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
  }, [matches, query])

  return matches
}
