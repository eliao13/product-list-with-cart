import Button from "../Button";

function Product({ image, name, category, price }) {
  return (
    <div>
      <img src={image} alt={name} />
      <Button text="Add to Cart" />
      <p>{category}</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
