import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Catalog from "./pages/Catalog/Catalog"
import CatalogGenre from "./pages/Catalog/CatalogGenre"
import CatalogType from "./pages/Catalog/CatalogType"
import Checkout from "./pages/Checkout/Checkout"
import FAQ from "./pages/FAQ/FAQ"
import ThankYou from "./pages/ThankYou/ThankYou"
import WishList from "./pages/WishList/WishList"
import SingleProduct from "./pages/SingleProduct/SingleProduct"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Profile from "./pages/Profile/Profile"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Search from "./components/Search/Search"
export default function EcomBase() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <PrivateRoute path="/profile" component={Profile} />

        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/wishList">
          <WishList />
        </Route>
        <PrivateRoute path="/checkout" component={Checkout} />

        <Route exact path="/catalog/:productId" component={SingleProduct} />

        <Route exact path="/genre/:keyword" component={CatalogGenre} />
        <Route path="/category/:type" component={CatalogType} />
      </Switch>
    </BrowserRouter>
  )
}
