import { useState, useEffect, createContext } from "react";
import "./App.css";
import ProductsContainer from "./components/products/ProductsContainer";
import CartContainer from "./components/cart/CartContainer";
import productData from "./data.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

function App() {
  return (
    <ProductProvider>
      <ProductsContainer />
      <CartContainer />
    </ProductProvider>
  );
}

export default App;
