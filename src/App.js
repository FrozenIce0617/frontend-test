import React, { useState, useCallback } from "react"

import "./App.css"

import Autocomplete from "./components/Autocomplete"
import ProductDetail from "./components/ProductDetail"

function App() {
  const [productId, setProductId] = useState()

  const onClickProduct = useCallback(
    (id) => {
      setProductId(id)
    },
    [setProductId]
  );

  return (
    <div className={productId ? "App display-details" : "App"}>
      <Autocomplete onClickProduct={onClickProduct} />
      <ProductDetail productId={productId} />
    </div>
  );
}

export default App
