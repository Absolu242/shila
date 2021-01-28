import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ONE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_CLEAR_ITEMS } from "../Constant/cartConstant"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.id === item.id)

      if (existItem) {
        const it = state.cartItems.map((x) => (x.id === existItem.id ? item : x))
        return {
          ...state,
          cartItems: it,
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case CART_REMOVE_ONE_ITEM:
      const itm = parseInt(action.payload.qty) > 1 ? parseInt(action.payload.qty) - 1 : action.payload.qty
      action.payload.qty = itm
      let index = state.cartItems.indexOf((i) => i.id === action.payload.id)
      const copy = [...state.cartItems]
      console.log(copy)

      return {
        ...state,
        cartItems: index >= 0 ? copy.splice(index, 1) : copy,
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      }
    // case CART_ADD_ITEM:
    //   return {
    //     items: action.payload.cartItems,
    //   }
    // case CART_REMOVE_ITEM:
    //   return {
    //     items: action.payload.cartItems,
    //   }

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      }

    default:
      return state
  }
}
