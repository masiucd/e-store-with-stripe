import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { above } from "@utils/media-query"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Category } from "./category"
interface CategoryTableProps {
  uniqueList: Array<string>
  handleCategory: (evt: ChangeEvent<HTMLInputElement>) => void
  categories: Record<string, boolean>
  setInputValue: Dispatch<SetStateAction<string>>
  inputValue: string
}

const FilterWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  max-width: 90%;
  margin: 0 auto 1rem;
`
const tableStyles = css`
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-around;
  flex-flow: row wrap;
`

const InputGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 30rem;
  margin: 0.5rem auto;
  width: 80%;
  @media ${above.mobileXL} {
    width: 90%;
  }
  label {
    span {
      position: relative;
      display: inline-block;
      margin-left: 0.5rem;
      font-size: var(--h5);

      &::after {
        content: "";
        position: absolute;
        background-color: var(--highlight-shadow);
        bottom: 0.5rem;
        height: 0.3rem;
        width: 100%;
        left: 0;
      }
    }
  }
`
const categorySearchStyles = css`
  border: 1px solid var(--p);
  border-radius: var(--border-radius-m);
  padding: 0.5rem;
  box-shadow: var(--sh-lg);
  transition: var(--transition-s);
  outline: none;
  margin: 0 auto;
  width: 100%;
  &:focus {
    border: 1px solid var(--highlight);
    transform: scale(1.055);
    box-shadow: var(--sh-xl);
  }
`

export function CategoryTable({
  uniqueList,
  handleCategory,
  categories,
  setInputValue,
  inputValue,
}: CategoryTableProps): JSX.Element {
  // TODO: Filter input!!!!
  return (
    <FilterWrapper>
      <InputGroup>
        <label htmlFor="category">
          <span>category</span>
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className={categorySearchStyles}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
      <ul className={tableStyles}>
        {uniqueList.map((x) => (
          <Category key={x} category={x} handleCategory={handleCategory} categories={categories} />
        ))}
      </ul>
    </FilterWrapper>
  )
}
