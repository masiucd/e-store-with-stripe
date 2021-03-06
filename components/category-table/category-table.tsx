import { FC } from "react"
import { Category } from "./category"

interface CategoryTableProps {
  uniqueList: Array<string>
}

export function CategoryTable({ uniqueList }: CategoryTableProps) {
  return (
    <ul>
      {uniqueList.map((x) => (
        <Category key={x} category={x} />
      ))}
    </ul>
  )
}
