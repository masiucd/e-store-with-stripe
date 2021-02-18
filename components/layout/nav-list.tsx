import React from "react"
import navData from "@data/nav-data.json"
import { NavData, Shoe } from "@utils/types"
import Link from "next/link"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { above } from "@utils/media-query"
import { useMediaQuery } from "@hooks/media-query"
import Fade from "@components/animated/fade"
import { motion } from "framer-motion"
import { css } from "@emotion/css"
import Image from "next/image"
import { useCartState } from "@context/cart/cart-provider"
import { calculateItemsInCart } from "@context/cart/cart-functions"
import { useToggle } from "@hooks/toggle"
import { MainCart } from "@components/cart/main-cart"

const NavListStyles = styled(motion.ul)`
  display: flex;
  flex-basis: 50%;
  justify-content: space-between;
  padding: 0.5rem;
  li {
    a {
      font-size: 1.5rem;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.2rem;
        background-color: var(--p);
        width: 0;
        transition: var(--transition-s);
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
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

  .cart-icon {
    background: transparent;
    box-shadow: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .cart-icon-large {
    display: flex;
  }
`
const MobileList = styled(NavListStyles)`
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem;

  li {
    a {
      font-size: 3rem;
      color: var(--white);
    }
  }

  .active {
    a {
      &::before {
        top: 3px;
        left: -12px;
        width: 30%;
      }
    }
  }
`

const fadeStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--red);
  height: 100%;
  z-index: 5;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  display: flex;
  align-items: center;
`

const CartItemsDisplay = styled.span`
  font-size: 1.3rem;
  padding-left: 0.5rem;
`

const renderNavData = (route: string) => (xs: NavData[]) =>
  xs.map((a) => (
    <motion.li
      key={a.name}
      className={route.slice(1) === a.name ? "active" : ""}
      whileHover={{ scale: 1.2, rotate: 3 }}
      whileFocus={{ scale: 1.2, rotate: 3 }}
    >
      <Link href={`${a.path}`}>
        <a>{a.name}</a>
      </Link>
    </motion.li>
  ))

interface NavListProps {
  isOpenMenu: boolean
  toggleIsCartOpen: () => void
  cart: Shoe[]
}

export const NavList: React.FC<NavListProps> = ({
  isOpenMenu,
  toggleIsCartOpen,
  cart,
}): JSX.Element => {
  const { route } = useRouter()
  const aboveTablet = useMediaQuery(above.tabletM)
  const render = renderNavData(route)

  return aboveTablet ? (
    <NavListStyles data-testid="layout-nav-list">
      {render(navData)}{" "}
      <button
        data-testid="layout-card-icon"
        className="cart-icon cart-icon-large"
        onClick={toggleIsCartOpen}
      >
        <Image src="/cart.svg" width={30} height={30} />
        {cart.length > 0 && <CartItemsDisplay>{calculateItemsInCart(cart)}</CartItemsDisplay>}
      </button>
    </NavListStyles>
  ) : (
    <Fade
      isAnimated={isOpenMenu}
      className={fadeStyles}
      options={{
        initial: { x: 100 },
        exit: { x: 100 },
        animate: { x: 0 },
      }}
    >
      <MobileList>
        {render(navData)}
        <button data-testid="layout-card-icon-mobile" className="cart-icon cart-icon-small">
          <Image src="/cart.svg" width={30} height={30} />
        </button>
      </MobileList>
    </Fade>
  )
}
