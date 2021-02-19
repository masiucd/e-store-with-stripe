import { Shoe } from "@utils/types"

const isItemTheSame = (cart: Shoe[], newCartItemToAdd: Shoe): Shoe | undefined =>
  cart.find((item) => item.id === newCartItemToAdd.id)

const increaseQuantity = (cart: Shoe[], cartItem: Shoe): Shoe[] =>
  cart.map((item) => (item.id === cartItem.id ? { ...item, quantity: item.quantity! + 1 } : item))

export const addItemToCart = (cart: Shoe[], newCartItemToAdd: Shoe): Shoe[] => {
  const doesCartItemToAddExistInTheCart = isItemTheSame(cart, newCartItemToAdd)

  if (doesCartItemToAddExistInTheCart) {
    return increaseQuantity(cart, doesCartItemToAddExistInTheCart)
  }

  return [...cart, { ...newCartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cart: Shoe[], itemToRemove: Shoe): Shoe[] => {
  const doesCartItemToAddExistInTheCart = isItemTheSame(cart, itemToRemove)
  // What if the quantity is 1 ? then remove
  if (doesCartItemToAddExistInTheCart) {
    return cart.map((item) =>
      item.id === itemToRemove.id ? { ...item, quantity: item.quantity! - 1 } : item
    )
  }
  return [...cart]
}

export const calculateItemsInCart = (cart: Shoe[]): number =>
  cart.reduce((accumulator, { quantity }) => accumulator + quantity!, 0)

export const calculateTotalCartPrice = (cart: Shoe[]): number => {
  return cart.reduce((a, b: Shoe) => {
    return a + b.price * b.quantity!
  }, 0)
}
