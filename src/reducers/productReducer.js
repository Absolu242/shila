import { PRODUCT_LIST_FILTER_REQUEST, PRODUCT_LIST_FILTER_SUCCESS, PRODUCT_LIST_FILTER_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_TOP_FAIL } from "../Constant/productConstant"

export const productSearchReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      // const product = action.payload.products.filter((prod) => prod.id === action.payload.id)

      return { loading: false, product: action.payload[0] }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productListFilterReducer = (state = { filteredProducts: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FILTER_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_FILTER_SUCCESS:
      let filter = action.payload.products

      if (action.payload.cat === "" && action.payload.size === "" && action.payload.color === "") {
        filter = action.payload.products
      } else if (action.payload.cat !== "" || action.payload.size !== "" || action.payload.color !== "") {
        filter = action.payload.cat !== "" ? action.payload.products.filter((prod) => prod.tag === action.payload.cat || prod.genre === action.payload.cat) : filter
        filter = action.payload.color !== "" ? filter.filter((prod) => prod.color === action.payload.color) : filter
        filter = action.payload.size !== "" ? filter.filter((prod) => prod.size.indexOf(action.payload.size) >= 0) : filter
      }

      return {
        loading: false,
        filteredProducts: filter,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_LIST_FILTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
