import React from "react"
import Catalog from "./Catalog"

export default function CatalogType({ match }) {
  const type = match.params.type
  return (
    <>
      <Catalog type={type} />
    </>
  )
}
