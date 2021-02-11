import React from "react"
import { css, cx } from "@emotion/css"
import { NavList } from "./nav-list"
import Link from "next/link"
import styled from "@emotion/styled"

const NavWrapper = styled.nav`
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const titleStyles = css`
  position: relative;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  line-height: 3rem;
  display: flex;
  padding: 0.2rem;
  h3 {
    position: relative;
    &::before {
      content: "";
      top: 2px;
      left: 0;
      height: 0.4rem;
      background-color: var(--highlight);
      width: 100%;
      position: absolute;
      transform: skewX(5deg) skewY(1deg);
      box-shadow: var(--sh-lg);
      border-radius: var(--border-radius-m);
    }
    &::after {
      content: "";
      bottom: 1px;
      left: 0;
      height: 0.4rem;
      background-color: var(--highlight);
      width: 100%;
      position: absolute;
      transform: skewX(5deg) skewY(1deg);
      box-shadow: var(--sh-xl);
      border-radius: var(--border-radius-m);
    }
  }
`

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1)
export const Nav = () => {
  return (
    <NavWrapper>
      <Link href="/">
        <div className={cx(titleStyles, "nav-title")}>
          <a>
            <h3>{capitalize("runner addict")}</h3>
          </a>
        </div>
      </Link>
      <NavList />
    </NavWrapper>
  )
}
