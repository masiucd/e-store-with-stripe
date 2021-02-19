import type { AppProps } from "next/app"
import { CartProvider } from "@context/cart/cart-provider"
import { motion } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <CartProvider>
      <motion.section
        className="app-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ backgroundColor: "#fff", opacity: 0 }}
        key={router.route}
      >
        <Component {...pageProps} />
      </motion.section>
    </CartProvider>
  )
}

export default MyApp
