import styled from "@emotion/styled"
import { below } from "@utils/media-query"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { SocialList } from "./social-list"

const FooterWrapper = styled.footer`
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  @media ${below.tablet} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Link href="/">
        <a className="nav-title">
          <Image src="/logo-1.svg" width={200} height="100%" />
        </a>
      </Link>
      <SocialList />
    </FooterWrapper>
  )
}
