import React, { useState } from "react"
import { Link } from "react-router-dom"
import IosSearch from "react-ionicons/lib/IosSearch"
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline"
import MdContact from "react-ionicons/lib/MdContact"
import IosBasket from "react-ionicons/lib/IosBasket"

import IosMenu from "react-ionicons/lib/IosMenu"

import MdClose from "react-ionicons/lib/MdClose"
import "./Navbar.css"
import { useSelector } from "react-redux"

export default function Navbar() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const wish = useSelector((state) => state.wish)
  const { wishItems } = wish

  const [Open, setOpen] = useState(false)
  return (
    <>
      <nav className="nav ">
        <div className="nav-content container py-3">
          <ul className="flex nav-items ">
            <div onClick={() => setOpen(!Open)} className="nav-menu">
              {Open ? <MdClose /> : <IosMenu />}
            </div>
            <div className={Open ? " show" : "nav-left flex "}>
              <li className="nav-link f-sm">
                <Link to="/genre/women">Woman</Link>
              </li>
              <li className="nav-link f-sm ">
                <Link to="/genre/men">Man</Link>
              </li>
              <li className="nav-link f-sm">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-link f-sm">
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <div className="logo f-xl f-bolder">
              <Link to="/">SHILA</Link>
            </div>

            <div className="nav-right flex">
              <li className="nav-link f-sm">
                <Link to="/search">
                  <IosSearch />
                </Link>
              </li>
              <li className="nav-link f-sm">
                <Link to="/wishList">
                  <MdHeartOutline />
                </Link>
                <p>{wishItems.reduce((acc, item) => acc + parseInt(item.qty), 0)}</p>
              </li>
              <li className="nav-link f-sm">
                <Link to="/cart">
                  <IosBasket />
                </Link>
                <p>{cartItems.reduce((acc, item) => acc + parseInt(item.qty), 0)}</p>
              </li>
              <li className="nav-link f-sm">
                <Link to="/profile">
                  <MdContact />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}
