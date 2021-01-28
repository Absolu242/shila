import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({ title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Save time and money while satisfying all your fashion, clothing and accessory needs by visiting the best online shopping site for women ( Shila)" />
        <title>{title}</title>
      </Helmet>
    </div>
  )
}
