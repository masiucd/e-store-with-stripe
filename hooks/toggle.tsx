import { useState } from "react"

interface UseToggle {
  on: boolean
  toggle: () => void
  onToFalse: () => void
  onToTrue: () => void
}

const useToggle = (initialState = false): UseToggle => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState(p => !p)
  }

  const onToTrue = (): void => {
    setState(true)
  }

  const onToFalse = (): void => {
    setState(false)
  }

  return {
    on: state,
    toggle,
    onToFalse,
    onToTrue,
  }
}

export { useToggle }
