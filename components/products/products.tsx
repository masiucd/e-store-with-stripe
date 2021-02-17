import React from "react"
import products from "@data/products.json"
import { Shoe } from "@utils/types"
import styled from "@emotion/styled"
import ProductItem from "./product-item"
import { motion } from "framer-motion"
import { useCartState } from "@context/cart/cart-provider"

const ProductsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 0 auto;
  grid-gap: 20px;
  padding: 1rem;
`

export const Products = (): JSX.Element => {
  const shoesData = products as Array<Shoe>
  // TODO: DELETE
  const { cart } = useCartState()
  console.log(cart)
  return (
    <ProductsGrid
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 20,
        duration: 0.2,
      }}
    >
      {shoesData.map((shoe) => (
        <ProductItem key={shoe.id} shoe={shoe} />
      ))}
    </ProductsGrid>
  )
}
