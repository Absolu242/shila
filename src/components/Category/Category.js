import React from "react"
import MdArrowForward from "react-ionicons/lib/MdArrowForward"
import bg1 from "../../images/cat1.jpg"
import bg3 from "../../images/shoescat2.jpg"
import bg2 from "../../images/ShoesCat.jpg"
import bg4 from "../../images/clothescat1.jpg"
import "./Category.css"
import { Link } from "react-router-dom"
export default function Category() {
  return (
    <>
      <div className="category container grid grid-4 py-4">
        <Link
          to="/catalog/"
          className="grid-item grid-item-a bg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596)),
            url(${bg1})`,
          }}
        >
          <h2 className=" text-center white f-xl">New Textures</h2>
          <button className="btn btn-round btn-white">
            <MdArrowForward />
          </button>
        </Link>

        <Link
          to="/category/shoes"
          className="grid-item grid-item-b bg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596)),
            url(${bg3})`,
          }}
        >
          <h2 className=" text-center white f-l">Party Shoes</h2>
          <button className="btn btn-round btn-white">
            <MdArrowForward />
          </button>
        </Link>

        <Link
          to="/category/sneakers"
          className="grid-item grid-item-c bg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596)),
            url(${bg2})`,
          }}
        >
          <h2 className=" text-center white f-l">Sneakers</h2>
          <button className="btn btn-round btn-white">
            <MdArrowForward />
          </button>
        </Link>

        <Link
          to="/category/clothes"
          className="grid-item grid-item-d bg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596)),
            url(${bg4})`,
          }}
        >
          <h2 className=" text-center white f-l">Clothes</h2>
          <button className="btn btn-round btn-white">
            <MdArrowForward />
          </button>
        </Link>
      </div>
    </>
  )
}
