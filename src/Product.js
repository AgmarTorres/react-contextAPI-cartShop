import React, { useContext, useState } from "react";
import { CartContext } from "./CartProvider";
import { addToCart } from "./cartReducer";

export const Product = () => {
  const { dispatch } = useContext(CartContext);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return <div onClick={() => addToCartHandler("teste")}>Producto</div>;
};
