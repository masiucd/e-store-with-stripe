import { Button } from "@components/styles/button"
import { useCartDispatch } from "@context/cart/cart-provider"
import styled from "@emotion/styled"
import { colors } from "@utils/colors"
import { Shoe } from "@utils/types"
import Image from "next/image"
import React from "react"

interface SingleProductItem {
  shoe: Shoe
}
const ProductStyles = styled.article`
  display: flex;
  height: 30rem;
  justify-content: space-between;
  margin-top: 10rem;
  h3 {
    color: ${colors.purple};
    position: relative;
    font-size: var(--h2);
    &:after {
      content: "";
      position: absolute;
      bottom: 13px;
      left: 0;
      background-color: ${colors.highlightShadow};
      width: 100%;
      height: 0.8rem;
      transform: rotate(-2deg);
    }
  }
  .col-1 {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  .col {
    div {
      border-radius: var(--border-radius-xl);
      box-shadow: var(--sh-lg);
      height: 100%;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(15, 5, 5, 0.5);
        width: 100%;
        height: 100%;
      }
    }
    img {
      object-fit: cover;
    }
  }
`

const SingleProductItem: React.FC<SingleProductItem> = ({ shoe }) => {
  const dispatch = useCartDispatch()
  return (
    <ProductStyles>
      <div className="col col-1">
        <h3>{shoe.title}</h3>
        <p>{shoe.description}</p>
        <p>{shoe.price} $</p>
        <Button onClick={() => dispatch({ type: "ADD_TO_CART", payload: shoe })}>
          add to cart
        </Button>
      </div>
      <div className="col col-2">
        <Image src={shoe.image} alt={`shoe-${shoe.title}`} width={500} height={500} />
      </div>
    </ProductStyles>
  )
}
export default SingleProductItem
