import React from "react"
import navData from "@data/nav-data.json"
import { NavData } from "@utils/types"
import Link from "next/link"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { above } from "@utils/media-query"
import { useMediaQuery } from "@hooks/media-query"

const NavListStyles = styled.ul`
  display: none;
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
  @media ${above.tabletM} {
    display: flex;
    flex-basis: 50%;
    justify-content: space-between;
    padding: 0.5rem;
  }
`

export const NavList = () => {
  const { route } = useRouter()

  const x = useMediaQuery(600)
  console.log("x", x)

  return (
    <NavListStyles>
      {x?.matches && <h1>hello</h1>}

      {(navData as NavData[]).map(a => (
        <li key={a.name} className={route.slice(1) === a.name ? "active" : ""}>
          <Link href={`${a.path}`}>
            <a>{a.name}</a>
          </Link>
        </li>
      ))}
    </NavListStyles>
  )
}
