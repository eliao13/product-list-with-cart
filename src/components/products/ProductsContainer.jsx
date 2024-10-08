import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../../App";

function ProductsContainer() {
  const products = useContext(ProductContext);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-start">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsContainer;
