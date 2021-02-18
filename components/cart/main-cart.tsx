import { FC } from "react"
import { Shoe } from "@utils/types"
import { css, cx } from "@emotion/css"

interface MainCartProps {
  cart: Shoe[]
}

const mainCartStyles = css`
  padding: 10rem;
  background-color: var(--red);
`

export const MainCart: FC<MainCartProps> = ({ cart }): JSX.Element => {
  console.log(cart)
  return (
    <ul className={cx(mainCartStyles)}>
      <h1>helllo</h1>
      {/* {cart.map((cart) => (
        <li key={cart.id}>
          <p>{cart.title}</p>
        </li>
      ))} */}
    </ul>
  )
}
