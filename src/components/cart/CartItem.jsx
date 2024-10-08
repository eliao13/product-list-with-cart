import Button from "../Button";

function CartItem({ name, price, quantity }) {
  const total = price * quantity;

  return (
    <div>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <p>{total}</p>
      <Button
        icon="/assets/images/icon-remove-item.svg"
        variant="remove-item"
      />
    </div>
  );
}

export default CartItem;
