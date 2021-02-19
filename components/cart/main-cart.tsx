import { FC, useEffect, useRef } from "react"
import { Shoe } from "@utils/types"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { calculateTotalCartPrice } from "@context/cart/cart-functions"
import { useCartDispatch } from "@context/cart/cart-provider"
import { Dispatch } from "@context/cart/types"
import { useClickOutside } from "@hooks/click-outside"
import { Button } from "@components/styles/button"
import { initializeCheckout } from "lib/payment"

interface MainCartProps {
  cart: Shoe[]
  closeCart: () => void
}

const mainCartStyles = css`
  & {
    padding-top: 2rem;
    margin: 0 auto;
    width: 90%;
    li {
      display: flex;
      padding-bottom: 1rem;
      width: 100%;
      justify-content: space-between;
      p {
        flex: 1;
        span {
          cursor: pointer;
        }
      }
    }
    mark,
    span {
      color: var(--highlight);
      background: none;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -0.2rem;
        left: 0;
        height: 0.2rem;
        width: 100%;
        background-color: var(--highlight);
      }
    }
  }
`
const buttonStyles = css`
  & {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    outline: none;
  }
`

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`

const handleRemoveShoe = (dispatch: Dispatch) => (shoe: Shoe): void => {
  if (shoe && shoe.quantity && shoe.quantity > 1) {
    dispatch({ type: "REMOVE_ITEM", payload: shoe })
  } else {
    dispatch({ type: "DROP_SHOE", payload: shoe.id })
  }
}

const checkout = (cartItems: Shoe[]): void => {
  initializeCheckout({
    lineItems: cartItems.map((item) => ({ price: item.id, quantity: item.quantity })),
  })
}
export const MainCart: FC<MainCartProps> = ({ cart, closeCart }): JSX.Element => {
  const dispatch = useCartDispatch()
  const preLoadedDispatch = handleRemoveShoe(dispatch)
  const ref = useRef(null)
  useClickOutside(ref, closeCart)

  useEffect(() => {
    if (cart.length === 0) {
      closeCart()
    }
  }, [cart.length, closeCart])

  return (
    <ul className={cx(mainCartStyles)} ref={ref}>
      <button className={buttonStyles} type="button" aria-label="close-button" onClick={closeCart}>
        &#x292C;
      </button>
      {cart.map((shoe) => (
        <li key={shoe.id}>
          <p>{shoe.title}</p>
          <p>
            {shoe.price} <mark>$</mark>{" "}
          </p>
          <p>
            Qty{" "}
            <button onClick={() => preLoadedDispatch(shoe)} className="btn-reset">
              &#x2190;
            </button>{" "}
            <span className="qty">{shoe.quantity}</span>{" "}
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: shoe })
              }}
              className="btn-reset"
            >
              &#x2192;
            </button>{" "}
          </p>
        </li>
      ))}
      <hr />
      <CartFooter>
        <p>Total Price</p>
        <strong>{calculateTotalCartPrice(cart)}$</strong>
        <Button onClick={() => checkout(cart)}>checkout</Button>
      </CartFooter>
    </ul>
  )
}
