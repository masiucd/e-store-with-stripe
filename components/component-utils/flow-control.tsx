import React from "react"

interface IFProps {
  condition: boolean
  children: React.ReactNode
}

function FlowControl({ condition, children }: IFProps): React.ReactNode {
  return condition ? children : null
}
export default FlowControl
