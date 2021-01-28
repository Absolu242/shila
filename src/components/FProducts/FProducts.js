import React from "react"
import { products } from "../../data/prodStore"
import ProductCard from "../ProductCard/ProductCard"
import "./FProduct.css"

export default function FProducts() {
  return (
    <>
      <div className="FProduct py-3 container">
        <div className="FProduct-title text-center ">
          <h2 className="f-xl">Featured Products</h2>
        </div>
        <div className="grid grid-4 py-4">
          {products
            .filter((prod) => prod.featured === true)
            .map((product, i) => {
              return (
                <div className="Fpro" key={i}>
                  {" "}
                  <ProductCard product={product} />
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
