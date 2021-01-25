import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import { decrementItemQuantity, removeFromCart } from "./cartReducer";

export const CartItem = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCartHandler = (itemToRemove) =>
    dispatch(removeFromCart(itemToRemove));

  const decrementQuantity = (item) => dispatch(decrementItemQuantity(item));

  return (
    <>
      {cart.map((item, idx) => (
        <div className="cartItem" key={idx}>
          <h3>{item.name}</h3>
          <h5>
            Quantity: {item.quantity}{" "}
            <span>
              <button type="button" onClick={() => decrementQuantity(item)}>
                <i>Decrement</i>
              </button>
            </span>
          </h5>
          <h5>Cost: {item.cost} </h5>
          <button onClick={() => removeFromCartHandler(item)}>Remove</button>
        </div>
      ))}
    </>
  );
};
