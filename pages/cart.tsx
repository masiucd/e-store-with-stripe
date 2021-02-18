import Title from "@components/common/title"
import Layout from "@components/layout/layout"
import { NextPage } from "next"
import React from "react"

const CartPage: NextPage = () => {
  return (
    <Layout metaConfig={{ title: "Cart" }}>
      <section className="cart-page-wrapper">
        <Title title="Cart" />
      </section>
    </Layout>
  )
}
export default CartPage
