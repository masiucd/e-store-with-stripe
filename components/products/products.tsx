import React from "react"
import products from "@data/products.json"
import { Shoe } from "@utils/types"

export const Products = () => {
  const shoesData = products as Array<Shoe>

  return (
    <div>
      {shoesData.map(shoe => (
        <React.Fragment key={shoe.id}>{shoe.title}</React.Fragment>
      ))}
    </div>
  )
}
