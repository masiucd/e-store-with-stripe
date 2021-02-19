import { RefObject, useEffect } from "react"

type Event = MouseEvent | TouchEvent

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = elementRef?.current

      if (!element || element.contains(event?.target as Node) || null) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [elementRef, handler])
}

export { useClickOutside }
