import Head from "next/head"

import { Products } from "@components/products/products"

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Products</h1>
        <Products />
      </div>
    </>
  )
}
export default ProductsPage
