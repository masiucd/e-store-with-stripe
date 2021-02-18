import { FC } from "react"
import { Shoe } from "@utils/types"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { calculateTotalCartPrice } from "@context/cart/cart-functions"

interface MainCartProps {
  cart: Shoe[]
  closeCart: () => void
}

const mainCartStyles = css`
  & {
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
`

export const MainCart: FC<MainCartProps> = ({ cart, closeCart }): JSX.Element => {
  return (
    <ul className={cx(mainCartStyles)}>
      <button className={buttonStyles} type="button" aria-label="close-button" onClick={closeCart}>
        &#x292C;
      </button>
      {cart.map((cart) => (
        <li key={cart.id}>
          <p>{cart.title}</p>
          <p>{cart.price}$</p>
          <p>
            Qty <button className="btn-reset">&#x2190;</button> {cart.quantity}{" "}
            <button className="btn-reset">&#x2192;</button>{" "}
          </p>
        </li>
      ))}
      <hr />
      <CartFooter>
        <p>Total Price</p>
        <strong>{calculateTotalCartPrice(cart)}$</strong>
      </CartFooter>
    </ul>
  )
}
