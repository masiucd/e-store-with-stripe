import React from "react"
import { NavList } from "./nav-list"
import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import { above } from "@utils/media-query"
import { useMediaQuery } from "@hooks/media-query"
import { NavIcon } from "./nav-icon"
import { useToggle } from "@hooks/toggle"
import { MainCart } from "@components/cart/main-cart"
import { useCartState } from "@context/cart/cart-provider"
import Fade from "@components/animated/fade"
import { css } from "@emotion/css"

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const cartStyles = css`
  & {
    top: 1rem;
    right: 0;
    position: fixed;
    background-color: var(--background);
    box-shadow: var(--sh-lg);
    width: 35rem;
    min-height: 10rem;
    padding: 1rem;
    border-radius: var(--border-radius-m);
    z-index: 20;
    border: 2px solid var(--secondary);
  }
`

export const Nav = (): JSX.Element => {
  const aboveTablet = useMediaQuery(above.tabletM)
  const { on: isOpenMenu, toggle: toggleOpenMenu } = useToggle()
  const { on: isCartOpen, toggle: toggleIsCartOpen, onToFalse: closeCart } = useToggle()
  const { cart } = useCartState()

  return (
    <NavWrapper>
      {!aboveTablet && <NavIcon toggle={toggleOpenMenu} isOpenMenu={isOpenMenu} />}
      <Link href="/">
        <a className="nav-title">
          <Image src="/logo-1.svg" width={200} height="100%" />
        </a>
      </Link>
      <NavList isOpenMenu={isOpenMenu} toggleIsCartOpen={toggleIsCartOpen} cart={cart} />

      {aboveTablet && (
        <Fade isAnimated={isCartOpen} className={cartStyles}>
          <MainCart cart={cart} closeCart={closeCart} />
        </Fade>
      )}
    </NavWrapper>
  )
}
