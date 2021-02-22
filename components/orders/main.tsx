import { useCartState } from "@context/cart/cart-provider"
import styled from "@emotion/styled"
import { isEmpty } from "@utils/helpers"
import { OrderTable } from "./order-table"

const OrderWrapper = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
`

export const Main = (): JSX.Element => {
  const { cart } = useCartState()
  const isItemsInTheCar = isEmpty(cart)

  return <OrderWrapper>{isItemsInTheCar && <OrderTable cart={cart} />}</OrderWrapper>
}
