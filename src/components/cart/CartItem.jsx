import Button from "../Button";

function CartItem({ name, price, quantity }) {
  const total = price * quantity;

  return (
    <div>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <p>{total}</p>
      <Button text="Remove" />
    </div>
  );
}

export default CartItem;
