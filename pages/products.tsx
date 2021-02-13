import Head from "next/head"

import { Products } from "@components/products/products"
import Title from "@components/common/title"

const ProductsPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title title="Products" />
        <Products />
      </div>
    </>
  )
}
export default ProductsPage
