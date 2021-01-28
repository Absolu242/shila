import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
export default function Footer() {
  return (
    <footer>
      <div className="footer-top container flex text-center f-sm">
        <ul className="text-center">
          <div className="flex footer-links py-4">
            {" "}
            <li className="footer-link">
              <Link to="/policy">Policy</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Terms</Link>
            </li>
            <li className="footer-link">
              <Link to="/faq">FAQS</Link>
            </li>
            <li className="footer-link">
              <Link to="/support">Support</Link>
            </li>
          </div>

          <div className="social-link flex f-bold ">
            <li className="footer-social-link">
              <Link to="/">Facebook</Link>
            </li>
            <li className="footer-social-link">
              <Link to="/">Instagram</Link>
            </li>
            <li className="footer-social-link">
              <Link to="/">Twitter</Link>
            </li>
            <li className="footer-social-link">
              <Link to="/">Youtube</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="footer-bottom text-center bg-grey py-3 f-sm">
        <p>&copy; 2020 SHILA </p>
      </div>
    </footer>
  )
}
