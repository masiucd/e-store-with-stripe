import React from "react"

interface IFProps {
  condition: boolean
  children: React.ReactNode
}

function IF({ condition, children }: IFProps) {
  return condition ? children : null
}
export default IF
