import React, { useState } from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./Checkout.css"
import { useSelector } from "react-redux"
// import { saveShippingAdress } from "../../actions/cartActions"
// import { createOrder } from "../../actions/orderActions"
export default function Checkout() {
  const orderList = useSelector((state) => state.orderList)
  const orders = orderList.orders
  const { cartItems, shippingPrice, discount, totalPrice } = orders

  const user = useSelector((state) => state.userLogin.userInfo)

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Address, setAddress] = useState("")
  const [Suite, setSuite] = useState("")
  const [City, setCity] = useState("")
  const [Country, setCountry] = useState("")
  const [PostalCode, setPostalCode] = useState("")

  const [Error, setError] = useState("")

  function onForSubmit(e) {
    e.preventDefault()
    if (Address !== "" && Suite !== "" && City !== "" && Country !== "" && PostalCode !== "" && FirstName !== "" && LastName !== "") {
      console.log(Address, Suite, City, Country, PostalCode)
    } else {
      setError("Not all Field are filled Please check the Form")
    }
  }

  return (
    <div>
      <SEO title="Shila || Checkout page" />
      <Layout>
        <div className="checkout container ">
          <div className="checkout-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">Checkout</h2>
          </div>
          <main className="checkout-main">
            <div className="checkout-left">
              {Error !== "" ? <p className="red text-center f-sm py-3">{Error}</p> : ""}
              <form onSubmit={onForSubmit} className="form">
                <div className="form-user">
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="Name">Name</label>
                      <input type="text" name="Name" value={user ? user.name : Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-input">
                      <label htmlFor="Email">Email</label>
                      <input type="email" name="Email" onChange={(e) => setEmail(e.target.value)} value={user ? user.email : Email} />
                    </div>
                  </div>
                </div>
                <div className="form-shipping">
                  <h3 className="form-section-title">Shipping Adress</h3>
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="FirstName">First name</label>
                      <input type="text" name="FirstName" onChange={(e) => setFirstName(e.target.value)} value={FirstName} />
                    </div>

                    <div className="form-input">
                      <label htmlFor="Lastname">Last name</label>
                      <input type="text" name="LastName" onChange={(e) => setLastName(e.target.value)} value={LastName} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="Address">Address</label>
                      <input type="text" name="Address" onChange={(e) => setAddress(e.target.value)} value={Address} />
                    </div>

                    <div className="form-input">
                      <label htmlFor="appartment">Apt ,Suite , Etc</label>
                      <input type="text" name="Suite" onChange={(e) => setSuite(e.target.value)} value={Suite} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="City">City</label>
                      <input type="city" name="City" onChange={(e) => setCity(e.target.value)} value={City} />
                    </div>

                    <div className="form-input">
                      <label htmlFor="Country">Country</label>
                      <select name="Country" onChange={(e) => setCountry(e.target.value)} value={Country}>
                        <option value="USA ">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">United KingDom</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="PostalCode">Postal code</label>
                      <input type="text" name="PostalCode" onChange={(e) => setPostalCode(e.target.value)} value={PostalCode} />
                    </div>
                  </div>
                </div>
                <div className="form-payment">
                  <h3 className="form-section-title">Payment method</h3>

                  <div className="form-row ">
                    <div className="form-input pay">
                      <input type="radio" name="Pay" defaultChecked={false} value="cart" />
                      <label>Visa/ MasterCard</label>
                    </div>

                    <div className="form-input pay">
                      <input type="radio" name="Pay" value="paypal" defaultChecked={true} />
                      <label>Paypal</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-input"></div>

                    <div className="form-input">
                      <button className="btn btn-black f-bold f-sm">Proceed To Payment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <aside className="checkout-right">
              <div className="checkout-orders">
                <p>Your Orders</p>

                <div className="checkout-list">
                  {cartItems.map((item, i) => (
                    <div className="checkout-item" key={i}>
                      <div className="checkout-image bg " style={{ backgroundImage: `url(${item.image})` }}></div>
                      <div className="checkout-prodInfo">
                        <h2 className="h2 f-bold f-md">Jeans With Sequins</h2>
                        <span className="checkout-vari flex">
                          <p>
                            {" "}
                            <span className="grey">Size :</span> {item.size}
                          </p>
                          <p>
                            {" "}
                            <span className="grey">Color :</span> {item.color}
                          </p>
                        </span>
                        <span className="checkout-price">
                          <p>
                            <span className="f-bold">${item.price}</span> x {item.qty}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="checkout-info">
                  <div className="checkout-discount">
                    <p>Delivery</p>{" "}
                    <p>
                      <span> ${shippingPrice}</span>
                      {shippingPrice === 10 && "(Standart Delivery)"}
                      {shippingPrice === 20 && "(Express Delivery)"}
                      {shippingPrice === 30 && "(Prime Delivery)"}
                    </p>
                  </div>
                  <div className="checkout-discount">
                    <p>Discount</p> <span>{discount !== 0 ? `-${discount}` : " No discount"}</span>
                  </div>
                  <div className="checkout-total">
                    <p>Total</p>
                    <span>
                      {" "}
                      <p>${totalPrice}</p>
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </main>
        </div>
      </Layout>
    </div>
  )
}
