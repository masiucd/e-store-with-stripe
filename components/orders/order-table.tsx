import { calculateTotalCartPrice } from "@context/cart/cart-functions"
import styled from "@emotion/styled"
import { Shoe } from "@utils/types"
import { colors, shadows } from "@utils/colors"
import { css, cx } from "@emotion/css"
import { Button } from "@components/styles/button"
import { initializeCheckout } from "lib/payment"

const titles = ["name", "price", "amount"]

interface Props {
  cart: Shoe[]
}

const OrderTableStyles = styled.table`
  margin: 0 auto;
  width: 100%;
  box-shadow: ${shadows.shL};
  td,
  th {
    box-shadow: ${shadows.shL};
    padding: 1rem 0.5rem;
    border-radius: var(--border-radius-m);
    font-size: var(--h5);
  }
  td {
    text-align: center;
    width: 33%;
  }
`

const headStyles = css`
  th {
    border-bottom: 2px solid ${colors.purple};
  }
`

const footerStyles = css`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  box-shadow: ${shadows.shL};
  border-radius: var(--border-radius-m);

  width: 100%;
  strong,
  button {
    margin: 0 1rem;
  }
  strong {
    font-size: var(--h4);
  }
`

const checkout = (cartItems: Shoe[]): void => {
  initializeCheckout({
    lineItems: cartItems.map((item) => ({ price: item.id, quantity: item.quantity })),
  })
}

export const OrderTable = ({ cart }: Props): JSX.Element => {
  return (
    <>
      <OrderTableStyles>
        <thead className={headStyles}>
          <tr>
            {titles.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </OrderTableStyles>
      <section className={cx(footerStyles, "table-footer")}>
        <strong>
          Total Price <span>{calculateTotalCartPrice(cart)}</span>{" "}
        </strong>
        <Button onClick={() => checkout(cart)}>create order</Button>
      </section>
    </>
  )
}
