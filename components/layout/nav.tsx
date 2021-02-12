import React from "react"
import { NavList } from "./nav-list"
import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import { above } from "@utils/media-query"
import { useMediaQuery } from "@hooks/media-query"
import { NavIcon } from "./nav-icon"
import { useToggle } from "@hooks/toggle"

const NavWrapper = styled.nav`
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Nav = (): JSX.Element => {
  const aboveTablet = useMediaQuery(above.tabletM)
  const { on: isOpenMenu, toggle: toggleOpenMenu } = useToggle()

  return (
    <NavWrapper>
      {!aboveTablet && <NavIcon toggle={toggleOpenMenu} isOpenMenu={isOpenMenu} />}
      <Link href="/">
        <a className="nav-title">
          <Image src="/logo-1.svg" width={200} height="100%" />
        </a>
      </Link>
      <NavList isOpenMenu={isOpenMenu} />
    </NavWrapper>
  )
}
