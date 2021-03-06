import React from "react"

interface CategoryProps {
  category: string
}

export const Category = ({ category }: CategoryProps) => {
  return (
    <li>
      <strong>{category}</strong>
    </li>
  )
}
