import { css } from "@emotion/css"
import { ChangeEvent } from "react"
import { Category } from "./category"
interface CategoryTableProps {
  uniqueList: Array<string>
  handleCategory: (evt: ChangeEvent<HTMLInputElement>) => void
  categories: Record<string, boolean>
}
const tableStyles = css`
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-around;
  flex-flow: row wrap;
`

export function CategoryTable({
  uniqueList,
  handleCategory,
  categories,
}: CategoryTableProps): JSX.Element {
  return (
    <ul className={tableStyles}>
      {uniqueList.map((x) => (
        <Category key={x} category={x} handleCategory={handleCategory} categories={categories} />
      ))}
    </ul>
  )
}
