import React from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import map from "../../images/map.jpg"
import "./Contact.css"
export default function Contact() {
  return (
    <div>
      <SEO title="Shila || Contact page" />
      <Layout>
        <div className="contact container h-full">
          <div className="contact-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">Catalog</h2>
          </div>

          <div className="contact-text flex text-center f-sm py-5 my-3">
            <div className="contact-text-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus tempore est doloribus iste aliquam magni architecto, mollitia itaque totam?</p>
            </div>
          </div>

          <div className="contact-info grid grid-3 ">
            <div className="contact-info-item btn-white text-center">
              <span className="grey f-sm ">Adress</span>
              <h3 className="f-bold f-md">
                27 W 24th St, <br />
                New York, NY 10010,USA
              </h3>
            </div>

            <div className="contact-info-item btn-white text-center ">
              <span className="grey  f-sm">Call-center</span>
              <h3 className="f-bold f-md">+1 212-290-2121</h3>
            </div>

            <div className="contact-info-item btn-white text-center">
              <span className="grey f-sm">Email</span>
              <h3 className="f-bold f-md">sales@shila.com</h3>
            </div>
          </div>
          <div className="contact-info-map ">
            <div className="map-image bg h-6" style={{ backgroundImage: `url(${map})` }}></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
