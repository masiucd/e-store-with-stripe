import Title from "@components/common/title"
import Layout from "@components/layout/layout"
import { Main } from "@components/orders/main"
import { useCartState } from "@context/cart/cart-provider"
import styled from "@emotion/styled"
import { NextPage } from "next"
import Link from "next/link"

const NoOrderMessage = styled.div`
  text-align: center;
`

const OrdersPage: NextPage = () => {
  const { cart } = useCartState()
  return (
    <Layout metaConfig={{ title: "Cart" }}>
      <section className="cart-page-wrapper">
        <Title title="Orders" />
        {cart.length > 0 ? (
          <Main />
        ) : (
          <NoOrderMessage>
            <h3>No Orders made</h3>
            <Link href="/products">
              <a>⬅ orders</a>
            </Link>
          </NoOrderMessage>
        )}
      </section>
    </Layout>
  )
}
export default OrdersPage
