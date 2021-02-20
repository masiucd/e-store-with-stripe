import React from "react"
import { Shoe } from "@utils/types"
import styled from "@emotion/styled"
import ProductItem from "./product-item"
import { motion } from "framer-motion"
import useSWR from "swr"
import { fetcher, graphql } from "lib/fetcher"
import { Spinner } from "@components/animated/spinner"

const ProductsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 0 auto;
  grid-gap: 20px;
  padding: 1rem;
`

export const Products = (): JSX.Element => {
  const { data: shoesList, error } = useSWR(
    graphql`
      {
        shoes {
          id
          title
          description
          image
          price
        }
      }
    `,
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!shoesList) return <Spinner />

  return (
    <>
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
        {(shoesList as Shoe[]).map((shoe) => (
          <ProductItem key={shoe.id} shoe={shoe} />
        ))}
      </ProductsGrid>
    </>
  )
}
