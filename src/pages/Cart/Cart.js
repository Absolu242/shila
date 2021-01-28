import React, { useState } from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./Cart.css"
import { Link, useHistory } from "react-router-dom"
import MdArrowForward from "react-ionicons/lib/MdArrowForward"
import { addToCart, removeFromCart, removeOneFromCart } from "../../actions/cartActions"
import { useSelector, useDispatch } from "react-redux"
import { couponCodes } from "../../data/coupon"
import { createOrder } from "../../actions/orderActions"

export default function Cart() {
  const dispatch = useDispatch()
  const [shipping, setShipping] = useState(10)
  const [discode, setDiscode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [disMsg, setDisMsg] = useState("")

  const history = useHistory()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  cart.shippingPrice = shipping
  cart.discount = discount
  cart.totalPrice = parseInt(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)) + shipping - discount > 0 ? parseInt(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)) + shipping - discount : 0

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    dispatch(
      createOrder({
        cartItems: cart.cartItems,
        totalPrice: cart.totalPrice,
        shippingPrice: cart.shippingPrice,
        discount: cart.discount,
      })
    )

    history.push("/checkout")
  }

  const onHandleDiscode = (e) => {
    setDiscode(e.target.value)
  }

  const FormHandler = (e) => {
    e.preventDefault()

    couponCodes.map((c) => {
      if (c.code === discode) {
        if (c.expired === true) {
          setDisMsg(`Sorry , coupon code : ${c.code} already expired`)
        }

        if (c.used === true) {
          setDisMsg(`Sorry , coupon code : ${c.code} has already been used`)
        }

        if (!c.used && !c.expired) {
          setDiscount(parseInt(c.price))
          setDisMsg(`Coupon code : ${c.code} applied`)

          couponCodes.splice(couponCodes.indexOf(c), 1)
        }
      }
      return c
    })
  }

  const onShippingHandler = (e) => {
    const ship = e.target.value
    if (ship === "ExD") {
      setShipping(0)
      setShipping(20)
    } else if (ship === "StD") {
      setShipping(0)
      setShipping(10)
    } else if (ship === "PrD") {
      setShipping(0)
      setShipping(30)
    } else {
      setShipping(10)
    }
  }

  return (
    <>
      {" "}
      <SEO title="Shila || Cart page" />
      <Layout>
        {" "}
        <div className="cart container h-full">
          <div className="cart-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">Shopping Cart</h2>
          </div>
          {cartItems.length === 0 ? (
            <div className="flex text-center">
              {" "}
              <h3 className="f-md py-2 grey">Your cart is empty</h3>
            </div>
          ) : (
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="cart-item">
                      <td className="cart-image bg " style={{ backgroundImage: `url(${item.image})` }}></td>
                      <td className="cart-prodInfo">
                        <h2 className="h2 f-bold f-md">{item.name}</h2>
                        <div className="cart-vari flex">
                          <p>
                            {" "}
                            <span className="grey">Size :</span> {item.size}
                          </p>
                          <p>
                            {" "}
                            <span className="grey">Color :</span> {item.color}
                          </p>
                        </div>
                      </td>
                      <td className="empty"></td>
                      <td className="cart-price">
                        <p>${item.price}</p>
                      </td>
                      <td className="cart-qty">
                        <div className="quantity">
                          <input type="number" value={item.qty} name="qty" id="" min={1} max="" />

                          <div className="quantity-nav">
                            <div className="quantity-button quantity-up" onClick={() => dispatch(addToCart(item, 1, item.size))}>
                              +
                            </div>
                            <div className="quantity-button quantity-down" onClick={() => dispatch(removeOneFromCart(item))}>
                              -
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="cart-total">
                        <p>${item.price * item.qty}</p>
                      </td>
                      <td className="cart-remove" style={{ cursor: "pointer", zIndex: "99999" }} onClick={() => removeFromCartHandler(item.id)}>
                        <button className="btn f-md pink">X</button>
                      </td>
                    </tr>
                  ))}
                  <tr className="next-row">
                    <td>
                      <form className="py-1" onSubmit={FormHandler}>
                        <p className="grey">Do you have a discount</p>
                        <div className="cart-input">
                          <input type="text" value={discode} onChange={(e) => onHandleDiscode(e)} placeholder="Coupon Code" className="bg-white grey" />
                          <button type="submit" className="btn text-center btn-round btn-black">
                            <MdArrowForward color="#fff" />
                          </button>
                        </div>
                      </form>
                      {disMsg !== "" && <p className="grey f-xs red"> {disMsg}</p>}
                      <div className="cart-del ">
                        <div className="py-1">
                          <select name="shipping" id="">
                            <option value="">Demo coupon List</option>
                            <option value="50%">ALL50OFF</option>
                            <option value="5DOLLARCODE">5DOLLARCODE</option>
                            <option value="80COUPONCODE">80COUPONCODE</option>
                          </select>
                        </div>
                        <p className="grey f-xs">Enter one of this code in the form</p>
                      </div>
                    </td>

                    <td>
                      <div className="cart-del py-1">
                        <p className="grey">Shipping</p>
                        <div>
                          <select onChange={(e) => onShippingHandler(e)} name="shipping" id="">
                            <option value="">Select Shipping Method</option>
                            <option value="ExD">Express Delivery - $20</option>
                            <option value="StD">Standar Delivery - $10</option>
                            <option value="PrD">Prime Delivery $30</option>
                          </select>
                          <p className="grey f-xs">Default method is : Standart</p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="last-row">
                    <td className="calcul">
                      <div className="calcul-discount">
                        <p>Shipping</p>
                        <span>
                          {" "}
                          <p>+${shipping}</p>
                        </span>
                      </div>
                      <div className="calcul-discount">
                        <p>Discount</p>
                        <span>
                          {" "}
                          <p className={discount > 0 ? "red" : ""}>-${discount}</p>
                        </span>
                      </div>

                      <div className="calcul-total">
                        <p>Total</p>
                        <span className="f-md">
                          {" "}
                          <p>${cart.totalPrice}</p>
                        </span>
                      </div>
                      <div className="calcul-button">
                        <Link to="/checkout">
                          <button onClick={checkoutHandler} className="btn btn-black f-bold f-sm">
                            Proceed To Checkout
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}
