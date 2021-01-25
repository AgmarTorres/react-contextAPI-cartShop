import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { clearCart } from "./cartReducer";
import { CartItem } from "./CartItem";
import { Product } from "./Product";
export default function App() {
  const { cart, dispatch } = useContext(CartContext);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const { items, total } = cart.reduce(
    ({ items, total }, { cost, quantity }) => ({
      items: items + quantity,
      total: total + quantity * cost,
    }),
    { items: 0, total: 0 }
  );

  return (
    <div className="App">
      <h1>Emoji Store</h1>
      <div className="products">
        <Product />
      </div>
      <div className="cart">
        <CartItem />
      </div>
      <h3>
        Items in Cart: {items} | Total Cost: ${total.toFixed(2)}
      </h3>
      <button onClick={clearCartHandler}>Clear Cart</button>
    </div>
  );
}
