import { PRODUCT_LIST_FILTER_REQUEST, PRODUCT_LIST_FILTER_SUCCESS, PRODUCT_LIST_FILTER_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_TOP_FAIL } from "../Constant/productConstant"
import { products } from "../data/prodStore"
//import axios from "axios"

export const SearchProducts = (input) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const data = products.filter((product) => product.name === input) ///await axios.get(`${products}/${id}`)

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const data = products.filter((product) => product.id === id) ///await axios.get(`${products}/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })

    const data = { products } //await axios.get(`${products}/top`)

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const listProductsFilter = (cat, size, color, sort) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_FILTER_REQUEST })

    const data = { products, cat, size, color, sort } //await axios.get(`${products}?keyword=${keyword}`)

    dispatch({
      type: PRODUCT_LIST_FILTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FILTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
