import { Shoe } from "@utils/types"
import React from "react"

interface SingleProductItem {
  shoe: Shoe
}

const SingleProductItem: React.FC<SingleProductItem> = ({ shoe }) => {
  return (
    <>
      <h1>{shoe.title}</h1>
    </>
  )
}
export default SingleProductItem
