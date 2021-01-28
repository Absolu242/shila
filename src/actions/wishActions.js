import { WISH_ADD_ITEM, WISH_REMOVE_ITEM } from "../Constant/wishConstant"

export const addToWish = (product, qty, prodsize) => async (dispatch, getState) => {
  const data = product

  data.qty = Number(qty)
  console.log(data.qty)
  data.size = prodsize
  dispatch({
    type: WISH_ADD_ITEM,
    payload: {
      id: data.id,
      name: data.name,
      size: data.size,
      price: data.price,
      image: data.image,
      color: data.color,
      qty: data.qty,
    },
  })

  localStorage.setItem("wishItems", JSON.stringify(getState().wish.wishItems))
}

export const removeFromWish = (id) => (dispatch, getState) => {
  dispatch({
    type: WISH_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("wishItems", JSON.stringify(getState().wish.wishItems))
}
