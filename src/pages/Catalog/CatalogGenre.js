import React from "react"
import Catalog from "./Catalog"

export default function CatalogGenre({ match }) {
  const keyword = match.params.keyword
  return (
    <>
      <Catalog keyword={keyword} />
    </>
  )
}
