import React from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "../Cart/Cart.css"
import { removeFromWish } from "../../actions/wishActions"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../../actions/cartActions"

export default function WishList() {
  const dispatch = useDispatch()

  const wish = useSelector((state) => state.wish)
  const { wishItems } = wish

  const removeFromWishHandler = (id) => {
    dispatch(removeFromWish(id))
  }

  return (
    <>
      {" "}
      <SEO title="Shila || Cart page" />
      <Layout>
        {" "}
        <div className="cart container h-full">
          <div className="cart-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">My Wish List</h2>
          </div>
          {wishItems.length === 0 ? (
            <div className="flex text-center">
              {" "}
              <h3 className="f-md py-2 grey">Your wish list is empty</h3>
            </div>
          ) : (
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Products</th>
                  </tr>
                </thead>
                <tbody>
                  {wishItems.map((item) => (
                    <tr key={item.id} className="cart-item">
                      <td className="cart-image bg " style={{ backgroundImage: `url(${item.image})` }}></td>
                      <td className="cart-prodInfo">
                        <h2 className="h2 f-bold f-md">{item.name}</h2>
                        <div className="cart-vari flex">
                          <p>
                            {" "}
                            <span className="grey">Size :</span> {item.size}
                          </p>
                          <p>
                            {" "}
                            <span className="grey">Color :</span> {item.color}
                          </p>
                        </div>
                      </td>
                      <td></td>
                      <td className="cart-price">
                        <p>${item.price}</p>
                      </td>
                      <td className="cart-qty">
                        <div className="quantity f-md">{item.qty}</div>
                      </td>
                      <td className="cart-total">
                        <button className="btn btn-black p-1 py-2" onClick={() => dispatch(addToCart(item, 0, item.size))}>
                          Add to Cart
                        </button>
                      </td>
                      <>
                        <button style={{ cursor: "pointer", zIndex: "99999" }} onClick={() => removeFromWishHandler(item.id)} className="btn f-md pink">
                          x
                        </button>
                      </>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}
