import { useEffect, useRef } from "react"

const useShouldRender = (): boolean => {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true
  }, [])

  return ref.current
}

export { useShouldRender }
