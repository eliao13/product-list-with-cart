import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../../App";

function ProductsContainer() {
  const products = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
