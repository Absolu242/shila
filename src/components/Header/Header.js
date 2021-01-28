import React from "react"
import { Link } from "react-router-dom"
import bg1 from "../../images/main2.jpg"

import "./Header.css"
export default function Header() {
  return (
    <>
      <div
        className="header container  flex text-center"
        style={{
          backgroundImage: `     linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596))
          ,url(${bg1})`,
        }}
      >
        <div className="header-content ">
          <h1 className="f-xxl py-5 white f-bold"> New Collection</h1>

          <Link to="/catalog">
            {" "}
            <button className="btn btn-white f-bold f-sm">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  )
}
