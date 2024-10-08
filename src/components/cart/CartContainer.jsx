import CartItemContainer from "./CartItemContainer";

function CartContainer({ quantity }) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500">
        Your Cart({quantity})
      </h2>
      <CartItemContainer />
    </div>
  );
}

export default CartContainer;
