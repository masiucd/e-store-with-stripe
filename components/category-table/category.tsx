import { resetButtonStyles } from "@components/styles/button"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ChangeEvent, useState } from "react"

interface CategoryProps {
  category: string
  handleCategory: (evt: ChangeEvent<HTMLInputElement>) => void
  categories: Record<string, boolean>
}

const CateGoryItem = styled.li``

const buttonStyles = (hasBeenClicked: boolean) => css`
  ${resetButtonStyles}
  background-color:  ${hasBeenClicked ? "var(--red)" : "var(--btn)"};
  color: var(--btn-text);
  box-shadow: var(--sh-lg);
  min-width: 4rem;
  height: 2rem;
  border-radius: var(--border-radius-m);
  margin-bottom: 1rem;

  &:hover {
    box-shadow: var(--sh-xl);
  }
  &:active {
    position: relative;
    top: 0.6rem;
  }
`

const checkBoxStyles = css`
  display: grid;
  grid-template-columns: 1em 1fr;
  grid-gap: 0.5em;
  grid-template-areas: "input";
  position: relative;
  cursor: pointer;
  input[type="checkbox"] {
    opacity: 0;
    width: 1em;
    height: 1em;
    grid-area: "input";
    place-content: center;
    font-size: 1em;
  }
  span {
    position: absolute;
    top: 0;
    left: 1rem;
  }

  input[type="checkbox"]:checked + span {
    background: var(--highlight-shadow);
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    box-shadow: var(--sh-xl);
  }
`

export const Category = ({ category, handleCategory, categories }: CategoryProps): JSX.Element => {
  // const [hasBeenClicked, setHasBeenClicked] = useState(false)
  return (
    <CateGoryItem>
      <label htmlFor={category} className={checkBoxStyles}>
        <input
          type="checkbox"
          name={category}
          id={category}
          checked={categories[category]}
          onChange={handleCategory}
        />
        <span></span>
        {category}
      </label>
    </CateGoryItem>
  )
}
