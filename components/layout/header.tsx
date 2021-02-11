import { css } from "@emotion/css"
import React from "react"
import { Nav } from "./nav"

const headerStyles = css`
  border: 2px solid #000;
  padding: 1rem;
  min-height: 6rem;
  margin-bottom: 1rem;
`

export const Header = (): JSX.Element => {
  return (
    <header className={headerStyles}>
      <Nav />
    </header>
  )
}
