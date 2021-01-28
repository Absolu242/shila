import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ONE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../Constant/cartConstant"

export const addToCart = (product, qty, prodsize) => async (dispatch, getState) => {
  const data = product

  let sum1 = parseInt(data.qty)
  let sum2 = parseInt(qty)

  const total = sum1 >= 1 ? sum1 + sum2 : sum1
  data.size = prodsize

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data.id,
      name: data.name,
      size: data.size,
      price: data.price,
      image: data.image,
      color: data.color,
      qty: total,
    },
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeOneFromCart = (item) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ONE_ITEM,
    payload: item,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// export const addToCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice()

//   let productAlreadyInCart = false
//   cartItems.forEach((item) => {
//     if (item.id === product.id) {
//       productAlreadyInCart = true
//       item.count++
//     }
//   })
//   if (!productAlreadyInCart) {
//     cartItems.push({ ...product, count: 1 })
//   }
//   localStorage.setItem("cartItems", JSON.stringify(cartItems))

//   return dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       cartItems: cartItems,
//     },
//   })
// }

// export const removeFromCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice().filter((p) => p.id !== product.id)
//   localStorage.setItem("cartItems", JSON.stringify(cartItems))

//   return dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: {
//       cartItems,
//     },
//   })
// }

export const saveShippingAdress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem("shippingAdress", JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem("paymentMethod", JSON.stringify(data))
}
