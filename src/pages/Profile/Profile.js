import React, { useState } from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./Profile.css"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/userAction"
export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div>
      <SEO title="Shila || Profile Page" />
      <Layout>
        <div className="profile  ">
          <div className="profile-content container py-5">
            <ProfileNav activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="profile-tabs__info">
              <ProfileContent tab={activeTab} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

const ProfileNav = ({ activeTab, onTabChange }) => {
  const tabClass = (tabName) => `profile-tab btn ${activeTab === tabName ? "btn-black" : ""}`

  return (
    <div className="profile-tabs">
      <div className="profile-tabs__content">
        <button className={tabClass("personal")} onClick={() => onTabChange("personal")}>
          {" "}
          Personal Info
        </button>
        <button className={tabClass("active")} onClick={() => onTabChange("active")}>
          Active Orders{" "}
        </button>
        <button className={tabClass("history")} onClick={() => onTabChange("history")}>
          {" "}
          Orders History
        </button>
      </div>
    </div>
  )
}

const ProfileContent = ({ tab }) => {
  const user = useSelector((state) => state.userLogin.userInfo)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  const dispatch = useDispatch()

  switch (tab) {
    default:
    case "personal":
      return (
        <div className="profile-info tab1">
          <button className="btn  btn-black p-1 my-2" onClick={() => dispatch(logout())}>
            Log Out
          </button>
          <main className="checkout-main">
            <div className="checkout-left">
              <form action="" className="form">
                <div className="form-user">
                  <h3 className="form-section-title f-md">User Info</h3>
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="name">Name</label>
                      <input value={name} type="name" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-input">
                      <label htmlFor="email">Email</label>
                      <input value={email} type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="form-shipping">
                  <h3 className="form-section-title">Billing Info</h3>
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="firstname">First name</label>
                      <input type="firstname" name="firstname" required />
                    </div>

                    <div className="form-input">
                      <label htmlFor="lastname">Last name</label>
                      <input type="lastname" name="lastname" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="address">Address</label>
                      <input type="address" name="address" required />
                    </div>

                    <div className="form-input">
                      <label htmlFor="appartment">Apt ,Suite , Etc</label>
                      <input type="appartment" name="appartment" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="city">City</label>
                      <input type="city" name="city" required />
                    </div>

                    <div className="form-input">
                      <label htmlFor="country">Country</label>
                      <select name="shipping" id="">
                        <option value="ExD ">Express Delivery - $20</option>
                        <option value="StD">Standar Delivery - $10</option>
                        <option value="PrD">Prime Delivery $30</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-input">
                      <label htmlFor="postalcode">Postal code</label>
                      <input type="text" name="postalcode" required />
                    </div>
                  </div>
                </div>
                <div className="form-payment">
                  <h3 className="form-section-title">Payment method</h3>

                  <div className="form-row ">
                    <div className="form-input pay">
                      <input type="radio" name="payement" required />
                      <label>Visa/ MasterCard</label>
                    </div>

                    <div className="form-input pay">
                      <input type="radio" name="payement" id="pay" defaultValue={true} />
                      <label>Paypal</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-input"></div>

                    <div className="form-input">
                      <button className="btn btn-black f-bold f-sm my-3">Update Info</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      )
    case "active":
      return (
        <div className="profile-info tab1">
          <div className="empty-msg">
            <p className="msg f-sm black text-center py-3">
              You have <span className="red"> 0</span> active Order, Feel free to visit our{" "}
              <span>
                {" "}
                <Link className="pink" to="/catalog">
                  Catalog
                </Link>
              </span>{" "}
              to bring some animation here
            </p>
          </div>
        </div>
      )
    case "history":
      return (
        <div className="profile-info tab1">
          <div className="empty-msg">
            <p className="msg f-sm black text-center py-3">
              You have <span className="red"> 0</span> Order History, Feel free to visit our{" "}
              <span>
                {" "}
                <Link className="pink" to="/catalog">
                  Catalog
                </Link>
              </span>{" "}
              to bring some animation here
            </p>
          </div>
        </div>
      )
  }
}
