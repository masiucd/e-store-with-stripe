import { css, cx } from "@emotion/css"
import { useScrollY } from "@hooks/scroll-y"
import React from "react"
import { Nav } from "./nav"

const headerStyles = (y: number): string => css`
  & {
    padding: 1rem;
    min-height: 6rem;
    margin-bottom: 1rem;
    transition: background-color 0.5s ease;
    ${y > 75
      ? `position: sticky;
         top: 0;
         z-index: 20;
         background-color: var(--background);
         box-shadow: 0 0 0 2px var(--dark-m);`
      : `
         position: static;
      `};
  }
`

export const Header = (): JSX.Element => {
  const { y } = useScrollY()

  return (
    <header className={cx(headerStyles(y))}>
      <Nav />
    </header>
  )
}
