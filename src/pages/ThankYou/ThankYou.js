import React from "react"
import SEO from "../../components/SEO/SEO"

import Layout from "../../components/Layout/Layout"
import cat1 from "../../images/cat1.jpg"
import { Link } from "react-router-dom"
import "./ThankYou.css"

export default function ThankYou() {
  return (
    <div>
      <SEO title="Shila || Thank you page" />
      <Layout>
        <div className="thank container white text-center h-full bg" style={{ backgroundImage: `url(${cat1})` }}>
          <div className="thank-info">
            <h2 className="f-bold f-xl ">
              Thanks ! <br />
              Your order is Complete.
            </h2>
            <p>We sent a confirmation to your email</p>
          </div>

          <div className="thank-btn">
            <Link to="/">
              {" "}
              <button className="btn btn-black py-1">Home Page</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
