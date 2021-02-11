import styled from "@emotion/styled"
import { NavData } from "@utils/types"
import React from "react"
import navData from "@data/nav-data.json"
import Link from "next/link"
const MobileListStyles = styled.ul``

export const MobileList = (): JSX.Element => {
  return (
    <MobileListStyles>
      {/* {(navData as NavData[]).map(a => (
        <li key={a.name} className={route.slice(1) === a.name ? "active" : ""}>
          <Link href={`${a.path}`}>
            <a>{a.name}</a>
          </Link>
        </li>
      ))} */}
    </MobileListStyles>
  )
}
