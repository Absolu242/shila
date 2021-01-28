import React from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./Catalog.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { listProductsFilter } from "../../actions/productActions"
import MdTime from "react-ionicons/lib/MdTime"

export default function Catalog({ match, keyword = "", type = "" }) {
  const [cat, setCat] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")

  const dispatch = useDispatch()

  const filtered = useSelector((state) => state.filter)
  const { filteredProducts, loading } = filtered

  useEffect(() => {
    if (keyword !== "" || type !== "") {
      setCat(keyword || type)
      dispatch(listProductsFilter(cat, size, color))
    } else {
      setCat(cat)
      dispatch(listProductsFilter(cat, size, color))
    }
  }, [dispatch, keyword, type, cat, size, color])

  return (
    <div>
      <SEO title="Shila || Catalog page" />
      <Layout>
        <div className="cata container h-full">
          <div className="cata-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">
              Catalog {keyword}
              {type}
            </h2>
          </div>
          <div className={keyword !== "" || type !== "" ? "cata-filters container grid grid-3" : "cata-filters container grid grid-4"}>
            {keyword !== "" || type !== "" ? (
              ""
            ) : (
              <div className="cata-ctg py-2">
                <p className="f-sm">Category</p>
                <select value={cat} onChange={(e) => setCat(e.target.value)} name="tags" id="">
                  <option value="">All</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="shoes">Shoes</option>
                  <option value="bags">Bags</option>
                  <option value="clothes">Clothes</option>
                  <option value="sneakers">Sneakers</option>
                </select>
              </div>
            )}

            <div className="cata-ctg py-2 ">
              <p className="f-sm">Size</p>
              <select value={size} onChange={(e) => setSize(e.target.value)} name="size" id="">
                <option value="">All</option>
                <option value="s">S</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="m">M</option>
              </select>
            </div>

            <div className="cata-ctg py-2">
              <p className="f-sm">Color</p>
              <select value={color} onChange={(e) => setColor(e.target.value)} name="" id="">
                <option value="">All</option>
                <option value="white">White</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="brown">Brown</option>
                <option value="wooden">Wooden</option>
              </select>
            </div>

            <div className="cata-ctg py-2">
              <p className="f-sm">Sort</p>
              <select name="" id="">
                <option value="all">All</option>
                <option value="lowHight">Price low to hight</option>
                <option value="hightLow">Price hight to low</option>
              </select>
            </div>
          </div>

          {(cat !== "" || size !== "" || color !== "") && filteredProducts.length === 0 ? (
            <div className="text-center pink f-bold f-md w-2">
              {" "}
              <p>Sorry theres is no such products</p>{" "}
            </div>
          ) : loading === true ? (
            <div className="text-center f-sm py-3">
              <MdTime fontSize="60px" color="#000" rotate={true} />
              <p>
                Loading <span className="pink"></span>
              </p>
            </div>
          ) : (
            <div className="cata-products text-center container grid grid-4 py-5">
              {filteredProducts.map((product, i) => {
                return (
                  <div key={i} className="text-center  cata-product py-5">
                    <ProductCard product={product} />
                  </div>
                )
              })}
            </div>
          )}

          <NewsLetter />
        </div>
      </Layout>
    </div>
  )
}
