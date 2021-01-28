import React from "react"
import MdArrowForward from "react-ionicons/lib/MdArrowForward"
import "./NewsLetter.css"
export default function NewsLetter() {
  return (
    <div className="news flex container text-center bg-pink  py-4">
      <div className="news-content">
        <h2 className="f-bold f-xl">Subscribe and Get 15% Off</h2>
        <form className="py-2">
          <div>
            <input type="text" placeholder="Your Email" className="bg-white grey" />
            <button className="btn text-center btn-round btn-black">
              <MdArrowForward color="#fff" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
