import React from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"
import Category from "../../components/Category/Category"
import Text from "../../components/Text/Text"
import FProducts from "../../components/FProducts/FProducts"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
export default function Home() {
  return (
    <div>
      <SEO title="Shila || Home page" />
      <Layout>
        <Header />
        <Category />
        <Text />
        <FProducts />
        <NewsLetter />
      </Layout>
    </div>
  )
}
