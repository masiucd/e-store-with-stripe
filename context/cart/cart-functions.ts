import { Shoe } from "@utils/types"

const isItemTheSame = (cart: Shoe[], newCartItemToAdd: Shoe): Shoe | undefined =>
  cart.find((item) => item.id === newCartItemToAdd.id)

const increaseQuantity = (cart: Shoe[], cartItem: Shoe): Shoe[] =>
  cart.map((item) => ({ ...item, quantity: cartItem.quantity ? cartItem.quantity + 1 : 0 }))

export const addItemToCart = (cart: Shoe[], newCartItemToAdd: Shoe): Shoe[] => {
  const doesCartItemToAddExistInTheCart = isItemTheSame(cart, newCartItemToAdd)

  if (doesCartItemToAddExistInTheCart) {
    return increaseQuantity(cart, doesCartItemToAddExistInTheCart)
  }

  return [...cart, { ...newCartItemToAdd, quantity: 1 }]
}

export const calculateItemsInCart = (cart: Shoe[]) =>
  cart.reduce((accumulator, { quantity }) => accumulator + quantity!, 0)

export const calculateTotalCartPrice = (cart: Shoe[]): number => {
  return cart.reduce((a, b: Shoe) => {
    return a + b.price * b.quantity!
  }, 0)
}
