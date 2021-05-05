import React from "react";

import "./App.css";

import Autocomplete from "./components/Autocomplete";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Autocomplete />
      <ProductDetail productId={null} />
    </div>
  );
}

export default App;
