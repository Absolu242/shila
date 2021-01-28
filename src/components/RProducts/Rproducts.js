import React from "react"
import { products } from "../../data/prodStore"
import ProductCard from "../ProductCard/ProductCard"
import "./FProduct.css"

export default function RProducts({ singleProd }) {
  const tag = singleProd.tag

  return (
    <>
      <div className="FProduct py-3 container">
        <div className="FProduct-title text-center ">
          <h2 className="f-xl">Related Products</h2>
        </div>
        <div className=" grid grid-4 py-4">
          {products
            .filter((prod) => {
              return prod.tag === tag
            })
            .map((product, i) => {
              return (
                <div className="Fprod my-3">
                  <ProductCard key={i} product={product} />
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
