import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productSearchReducer, productTopRatedReducer, productListFilterReducer } from "./reducers/productReducer"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer"
import { cartReducer } from "./reducers/cartReducer"
import { wishReducer } from "./reducers/wishReducer"
import { orderCreateReducer } from "./reducers/orderReducer"

const reducer = combineReducers({
  productSearch: productSearchReducer,
  productDetails: productDetailsReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  wish: wishReducer,
  filter: productListFilterReducer,
  //usereducer
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  orderList: orderCreateReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const wishItemsFromStorage = localStorage.getItem("wishItems") ? JSON.parse(localStorage.getItem("wishItems")) : []

const orderFromStorage = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : []

const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}

// if (localStorage.getItem("cartItems")) {
//   initialState.cart = { items: JSON.parse(localStorage.getItem("cartItems")) }
// }

const initialState = {
  wish: {
    wishItems: wishItemsFromStorage,
  },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  orderList: {
    orders: orderFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleWare = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))
export default store
