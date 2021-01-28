import React from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import cat2 from "../../images/clothescat2.jpg"
import shop from "../../images/shop.jpg"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import "./About.css"
export default function About() {
  return (
    <>
      <SEO title="Shila || About page" />
      <Layout>
        {" "}
        <div className="about container h-full">
          <div className="about-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">About</h2>
          </div>

          <div className="about-text flex text-center f-sm py-5">
            <div className="about-text-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus tempore est doloribus iste aliquam magni architecto, mollitia itaque totam?</p>
            </div>
          </div>

          <div className="about-post my-2 ">
            <div className="about-item  grid grid-2 about-a">
              <div className="about-image bg" style={{ backgroundImage: `url(${shop})` }}></div>
              <div className="about-image-text text-center">
                <span className="color"></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus? Optio consequuntur, eveniet voluptatibus earum, culpa error, voluptas suscipit perspiciatis dolorum porro fugit sint commodi officiis adipisci voluptatum deserunt.</p>
                <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus? Optio consequuntur, eveniet voluptatibus earum, culpa error, voluptas suscipit perspiciatis dolorum porro fugit sint commodi officiis adipisci voluptatum deserunt.</p>
              </div>
            </div>

            <div className="about-item  grid grid-2  about-b">
              <div className="about-image-text text-center ">
                <span className="color"></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus? Optio consequuntur, eveniet voluptatibus earum, culpa error, voluptas suscipit perspiciatis dolorum porro fugit sint commodi officiis adipisci voluptatum deserunt.</p>
                <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus? Optio consequuntur, eveniet voluptatibus earum, culpa error, voluptas suscipit perspiciatis dolorum porro fugit sint commodi officiis adipisci voluptatum deserunt.</p>
              </div>
              <div className="about-image bg" style={{ backgroundImage: `url(${cat2})` }}></div>
            </div>
          </div>
          <NewsLetter />
        </div>
      </Layout>
    </>
  )
}
