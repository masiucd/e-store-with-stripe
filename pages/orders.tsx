import Title from "@components/common/title"
import Layout from "@components/layout/layout"
import { Main } from "@components/orders/main"
import { NextPage } from "next"
import React from "react"

const OrdersPage: NextPage = () => {
  return (
    <Layout metaConfig={{ title: "Cart" }}>
      <section className="cart-page-wrapper">
        <Title title="Orders" />
        <Main />
      </section>
    </Layout>
  )
}
export default OrdersPage
