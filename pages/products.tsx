import Head from "next/head"
import { CartProvider } from "@context/cart/cart-provider"
import { Products } from "@components/products/products"
import Title from "@components/common/title"

const ProductsPage = (): JSX.Element => {
  return (
    <CartProvider>
      <Head>
        <title>products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title title="Products" />
        <Products />
      </div>
    </CartProvider>
  )
}
export default ProductsPage
