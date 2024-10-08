import Button from "../Button";

function Product({ product }) {
  const { image, name, category, price } = product;

  return (
    <div>
      <img
        src={image.mobile}
        srcSet={`${image.mobile} 375w, ${image.tablet} 768w, ${image.desktop} 1100w`}
        sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1100px"
        alt={name}
      />
      <Button text="Add to Cart" icon="/assets/images/icon-add-to-cart.svg" />
      <p>{category}</p>
      <p>{name}</p>
      <p>&#36;{price.toFixed(2)}</p>
    </div>
  );
}

export default Product;
