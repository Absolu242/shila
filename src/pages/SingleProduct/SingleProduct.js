import React, { useEffect, useState } from "react"
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./SingleProduct.css"
import RProducts from "../../components/RProducts/Rproducts"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../../actions/productActions"
import { addToCart } from "../../actions/cartActions"
import { Fragment } from "react"
import { addToWish, removeFromWish } from "../../actions/wishActions"
import MdTime from "react-ionicons/lib/MdTime"

export default function SingleProduct({ match, history }) {
  const id = match.params.productId
  const qty = 0
  const [size, setSize] = useState("")
  const [color, setColor] = useState(false)
  const [colored, setColored] = useState(false)
  const [eMsg, setEMsg] = useState("")

  const dispatch = useDispatch()

  const OneProduct = useSelector((state) => state.productDetails)

  const { product, loading } = OneProduct

  useEffect(() => {
    const fetch = async () => {
      await dispatch(listProductDetails(id))
    }

    fetch()
  }, [dispatch, id])

  const addTocartHandler = (e) => {
    if (size === "" || color === "") {
      setEMsg("Please choose a product variation (size and color)")
    } else {
      dispatch(addToCart(e, qty, size))
      history.push("/cart")
    }
  }

  function onRemoveWish(e) {
    dispatch(removeFromWish(e))
    setColored(!colored)
  }

  const HandleSize = (e) => {
    setSize(e.target.value)
  }
  // if (!Array.isArray(product.size)) {
  //   setTimeout(() => {
  //     window.location.reload()
  //   }, 6000)
  //   set
  // }

  return (
    <>
      <SEO title="Shila || Thank you page" />
      <Layout>
        {loading === true ? (
          <div className="text-center f-sm py-3">
            <MdTime fontSize="60px" color="#000" rotate={true} />
            <p>
              Loading <span className="pink"></span>
            </p>
          </div>
        ) : (
          <Fragment key={product.id}>
            <div className="sprod container py-5">
              <div className="sprod-first grid grid-2">
                <div className="sprod-image grid-item bg" style={{ backgroundImage: `url(${product.image})` }}></div>

                <div className="sprod-desc sprod-grid-item">
                  <div className="sprod-top">
                    <h2 className="sprod-name f-md bold">{product.name}</h2>
                    <p className="f-sm lighter">$ {product.price}</p>
                  </div>

                  {eMsg !== "" ? (
                    <div className="error red f-xs f">
                      <p>{eMsg}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="sprod-mid ">
                    <div className="sprod-vari">
                      <div className="sprod-vari-item">
                        <p>Size</p>
                        <select onChange={(e) => HandleSize(e)} name="size" id="">
                          <option value="">Select</option>
                          {Array.isArray(product.size) ? (
                            product.size.map((s, i) => (
                              <option key={i} value={s}>
                                {s}
                              </option>
                            ))
                          ) : (
                            <option value={product.size}> Refresh the page</option>
                          )}
                        </select>
                      </div>
                      <div className="sprod-vari-item">
                        <p>Color</p>
                        <select name="color" id="" onChange={(e) => setColor(e.target.value)}>
                          <option value="">Select</option>
                          <option value={`${product.color}`}>{product.color}</option>
                        </select>
                      </div>
                    </div>

                    <div className="sprod-btn">
                      <button onClick={() => addTocartHandler(product)} className="btn btn-black">
                        Add To Cart
                      </button>
                      <button onClick={() => (colored ? onRemoveWish(product.id) : dispatch(addToWish(product, 1, size)))} className="btn btn-white ">
                        {" "}
                        <MdHeartOutline color={colored ? "pink" : "black"} beat={colored} /> <span className={colored ? "pink" : "black"}>Add To Favorites</span>
                      </button>
                    </div>
                  </div>

                  <div className="sprod-smdesc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat quisquam, atque alias distinctio eius vitae enim, doloremque repellendus iure earum vero, quasi minus
                      <br />
                      <br />
                      Tempora placeat quam nesciunt vel!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <RProducts singleProd={product} />
          </Fragment>
        )}
      </Layout>
    </>
  )
}
