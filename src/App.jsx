import { useState } from "react";
import "./App.css";
import ProductsContainer from "./components/products/ProductsContainer";
import CartContainer from "./components/cart/CartContainer";

function App() {
  return (
    <>
      <ProductsContainer />
      <CartContainer />
    </>
  );
}

export default App;
