import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ChangeEvent } from "react"
import { Category } from "./category"
interface CategoryTableProps {
  uniqueList: Array<string>
  handleCategory: (evt: ChangeEvent<HTMLInputElement>) => void
  categories: Record<string, boolean>
}

const FilterWrapper = styled.section`
  border: 1px solid red;
`
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
  // TODO: Filter input!!!!
  return (
    <FilterWrapper>
      {/* TODO: Add filter input here */}
      {/* <input type="text" /> */}
      <ul className={tableStyles}>
        {uniqueList.map((x) => (
          <Category key={x} category={x} handleCategory={handleCategory} categories={categories} />
        ))}
      </ul>
    </FilterWrapper>
  )
}
