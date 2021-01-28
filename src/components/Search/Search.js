import React, { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import "../../pages/Catalog/Catalog.css"
import { products } from "../../data/prodStore"
import "./Search.css"
import Layout from "../Layout/Layout"
export default function Search() {
  const [name, setName] = useState("nice")

  console.log(name)
  return (
    <>
      <Layout>
        <div className="search">
          <div className="seach-content container">
            <div className="search-form">
              <input onChange={(e) => setName(e.target.value)} type="text" name="search" id="" placeholder="Search..." />
              {/* <span className="f-xs">Click enter </span> */}
            </div>

            <div className="search-results  grid grid-4">
              {products
                .filter((prod) => prod.id === 1)
                .map((product, i) => {
                  return (
                    <div key={i} className="text-center  cata-product py-5">
                      <ProductCard product={product} />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
