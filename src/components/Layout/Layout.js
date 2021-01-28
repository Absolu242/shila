import React from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

export default function Layout({ children }) {
  const style = {
    position: "relative",
    marginBottom: "8.5rem",
  }
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div style={style} />
      {children}
      <Footer />
    </>
  )
}
