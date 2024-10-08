import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";
import Button from "../Button";

function CartItemContainer() {
  return (
    <div>
      <CartItem />
      <OrderTotal />
      <Button text="Confirm Order" variant="confirm-order" />
    </div>
  );
}

export default CartItemContainer;
