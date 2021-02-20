import { Shoe, Status } from "@utils/types"

export interface CartState {
  cart: Array<Shoe>
  status: Status
}
interface AddToCart {
  type: "ADD_TO_CART"
  payload: Shoe
}

interface RemoveItemFromCart {
  type: "REMOVE_ITEM"
  payload: Shoe
}
interface DropShoe {
  type: "DROP_SHOE"
  payload: string
}

interface UpdateCartState {
  type: "UPDATE_CART"
  payload: Shoe[]
}

export type Action = AddToCart | RemoveItemFromCart | DropShoe | UpdateCartState
export type Dispatch = (action: Action) => void
