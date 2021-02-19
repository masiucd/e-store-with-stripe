import { createContext, useReducer, useContext } from "react"
import { addItemToCart, removeItemFromCart } from "./cart-functions"
import { Action, CartState, Dispatch } from "./types"

const cartStateContext = createContext<CartState | undefined>(undefined)
const cartDispatchContext = createContext<Dispatch | undefined>(undefined)

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      }
    case "DROP_SHOE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    status: "pending",
  })

  return (
    <cartStateContext.Provider value={state}>
      <cartDispatchContext.Provider value={dispatch}>{children}</cartDispatchContext.Provider>
    </cartStateContext.Provider>
  )
}

const useCartState = (): CartState => {
  const context = useContext(cartStateContext)
  if (!context) {
    throw new Error(`useCartContext must be used inside CartStateProvider`)
  }
  return context
}

const useCartDispatch = (): Dispatch => {
  const context = useContext(cartDispatchContext)
  if (!context) {
    throw new Error(`useCartContext must be used inside CartStateProvider`)
  }
  return context
}

export { CartProvider, useCartState, useCartDispatch }
