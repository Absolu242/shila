import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import EcomBase from "./EcomBase"
function App() {
  return (
    <Provider store={store}>
      <EcomBase />
    </Provider>
  )
}

export default App
