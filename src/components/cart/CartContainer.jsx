import CartItemContainer from "./CartItemContainer";

function CartContainer({ quantity }) {
  return (
    <div>
      <h2>Your Cart({quantity})</h2>
      <CartItemContainer />
    </div>
  );
}

export default CartContainer;
