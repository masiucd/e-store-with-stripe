import { createContext, useReducer, useContext, useEffect } from "react"
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

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
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
  const d = useCartDispatch()
  useEffect(() => {
    const dataFromStorage = typeof window !== "undefined" && localStorage.getItem("cart")
    const data = dataFromStorage && JSON.parse(dataFromStorage)
    if (data) {
      d({ type: "UPDATE_CART", payload: data })
    }
  }, [d])

  useEffect(() => {
    const data = JSON.stringify(context.cart)
    console.log(data)
    typeof window !== "undefined" && localStorage.setItem("cart", data)
  }, [context.cart])
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
