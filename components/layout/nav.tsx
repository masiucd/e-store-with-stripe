import React from "react"
import { NavList } from "./nav-list"
import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"

const NavWrapper = styled.nav`
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = () => {
  return (
    <NavWrapper>
      <Link href="/">
        <a className="nav-title">
          <Image src="/ra.svg" width={200} height="100%" />
        </a>
      </Link>
      <NavList />
    </NavWrapper>
  )
}
