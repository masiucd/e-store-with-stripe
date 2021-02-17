import { Shoe } from "@utils/types"

const getCart = (cart: Array<Shoe>) => {
  return cart
}

export const addItemToCart = (currentCart: Array<Shoe>, cartItemToAdd: Shoe): Shoe[] => {
  // is there already teh same item in the cart?
  const isThereAlreadyCartItemToAdd = currentCart.find((item) => item.id === cartItemToAdd.id)

  // if true then take the quantity of the item and increase it by one
  if (isThereAlreadyCartItemToAdd) {
    return currentCart.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity ? item.quantity + 1 : 0 }
        : item
    )
  }

  // else just add it to the cart with quantity of one
  return [...currentCart, { ...cartItemToAdd, quantity: 1 }]
}
