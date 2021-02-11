import React from "react"
import navData from "@data/nav-data.json"
import { NavData } from "@utils/types"
import Link from "next/link"
import styled from "@emotion/styled"

const NavListStyles = styled.ul`
  display: flex;
`

export const NavList = () => {
  return (
    <NavListStyles>
      {(navData as NavData[]).map(a => (
        <Link href={`${a.path}`} key={a.name}>
          <a>
            <li>{a.name}</li>
          </a>
        </Link>
      ))}
    </NavListStyles>
  )
}
