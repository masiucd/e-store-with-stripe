import { resetButtonStyles } from "@components/styles/button"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ChangeEvent, useState } from "react"

interface CategoryProps {
  category: string
  handleCategory: (evt: ChangeEvent<HTMLInputElement>) => void
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

export const Category = ({ category, handleCategory }: CategoryProps): JSX.Element => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  return (
    <CateGoryItem>
      <label htmlFor={category}>{category}</label>
      <input type="checkbox" name={category} id={category} />
    </CateGoryItem>
  )
}
