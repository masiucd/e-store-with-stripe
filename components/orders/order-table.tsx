import { calculateTotalCartPrice } from "@context/cart/cart-functions"
import styled from "@emotion/styled"
import { Shoe } from "@utils/types"
import { colors, shadows } from "@utils/colors"
import { css, cx } from "@emotion/css"

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
    padding: 0.5rem;
    border-radius: var(--border-radius-m);
  }
  td {
    text-align: center;
    width: 33%;
  }
`

const footerStyles = css`
  padding: 1rem 0.5rem;
`

export const OrderTable = ({ cart }: Props): JSX.Element => {
  return (
    <OrderTableStyles>
      <thead>
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
      <section className={cx(footerStyles, "table-footer")}>
        <strong>
          Total Price <span>{calculateTotalCartPrice(cart)}</span>{" "}
        </strong>
      </section>
    </OrderTableStyles>
  )
}
