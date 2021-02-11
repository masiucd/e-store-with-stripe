import React from "react"
import navData from "@data/nav-data.json"
import { NavData } from "@utils/types"
import Link from "next/link"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { above } from "@utils/media-query"
import { useMediaQuery } from "@hooks/media-query"

const NavListStyles = styled.ul`
  display: flex;
  flex-basis: 50%;
  justify-content: space-between;
  padding: 0.5rem;
  li {
    a {
      font-size: 1.2rem;
    }
  }
  .active {
    a {
      position: relative;
      &::before {
        content: "";
        top: 0;
        left: -12px;
        height: 1.2rem;
        background-color: var(--highlight-shadow);
        width: 40%;
        position: absolute;
        transform: skewX(10deg) skewY(1deg);
        box-shadow: var(sh-xl);
      }
    }
  }
`

const renderNavData = (route: string) => (xs: NavData[]) =>
  xs.map(a => (
    <li key={a.name} className={route.slice(1) === a.name ? "active" : ""}>
      <Link href={`${a.path}`}>
        <a>{a.name}</a>
      </Link>
    </li>
  ))

const MobileList = styled(NavListStyles)``

export const NavList = (): JSX.Element => {
  const { route } = useRouter()
  const aboveTablet = useMediaQuery(above.tabletM)
  const render = renderNavData(route)

  return aboveTablet ? (
    <NavListStyles data-testid="layout-nav-list">{render(navData)}</NavListStyles>
  ) : (
    <MobileList>{render(navData)}</MobileList>
  )
}
