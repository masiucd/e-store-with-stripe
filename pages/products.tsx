import { Products } from "@components/products/products"
import Title from "@components/common/title"
import React from "react"
import Layout from "@components/layout/layout"

const ProductsPage = (): JSX.Element => {
  return (
    <Layout metaConfig={{ title: "Products" }}>
      <section className="products-page-wrapper">
        <Title title="Products" />
        <Products />
      </section>
    </Layout>
  )
}
export default ProductsPage
