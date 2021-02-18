import type { AppProps } from "next/app"
import Layout from "@components/layout/layout"
import { CartProvider } from "@context/cart/cart-provider"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
