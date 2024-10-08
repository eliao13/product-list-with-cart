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
      <div className="flex w-full gap-4 md:gap-6 lg:gap-8 p-12">
        <div className="w-2/3">
          <ProductsContainer />
        </div>
        <div className="w-1/3">
          <CartContainer />
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
