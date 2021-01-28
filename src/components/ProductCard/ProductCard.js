import React, { useState } from "react"
import MdHeart from "react-ionicons/lib/MdHeart"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToWish, removeFromWish } from "../../actions/wishActions"
export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [colored, setColored] = useState(false)

  function onAddWish() {
    dispatch(addToWish(product, product.qty, product.size))
    setColored(!colored)
  }
  function onRemoveWish() {
    dispatch(removeFromWish(product.id))
    setColored(!colored)
  }

  return (
    <div className="productCard grid-item">
      <Link to={`/catalog/${product.id}`} className="productCard-top   " key={product.id}>
        <div className="productImage bg" style={{ backgroundImage: `url(${product.image})` }}></div>
        <div className="productBottom text-center py-1">
          <div className="productName f-md f-bold black">
            <p>{product.name}</p>
          </div>
          <div className="productPrice f-lead grey">
            <p>${product.price}</p>
          </div>
        </div>
      </Link>
      <button className="btn btn-round btn-white">
        <MdHeart
          onClick={() => {
            colored ? onRemoveWish() : onAddWish()
          }}
          color={colored ? " #ffd2c1" : "#000"}
          beat={colored}
        />
      </button>
    </div>
  )
}
