import React from "react"
import products from "@data/products.json"
import { Shoe } from "@utils/types"
import styled from "@emotion/styled"
import ProductItem from "./product-item"
import { above } from "@utils/media-query"
import { motion } from "framer-motion"

const ProductsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 20px;
  padding: 1rem;
  @media ${above.tabletL} {
    li:nth-of-type(1) {
      grid-column: 1/3;

      .body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`

export const Products = (): JSX.Element => {
  const shoesData = products as Array<Shoe>

  return (
    <ProductsGrid
      initial={{ opacity: 0, x: -100, rotate: -10, scale: 1.2 }}
      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 20,
        duration: 1,
        delay: 0.4,
      }}
    >
      {shoesData.map(shoe => (
        <ProductItem key={shoe.id} shoe={shoe} />
      ))}
    </ProductsGrid>
  )
}
