import { CartProduct, CartState } from "../states";

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: CartState) => {
  //Calculate price of items
  state.itemsPrice = Number(
    addDecimals(
      state.cartItems.reduce(
        (acc: number, item: CartProduct) => acc + item.price * item.qty,
        0
      )
    )
  );
  //Calculate shipping price (if order > $100, shipping is free, else $10)
  state.shippingPrice = Number(addDecimals(state.itemsPrice > 100 ? 0 : 10));
  //Calculate tax price (5% tax - go Alberta!)
  state.taxPrice = Number(
    addDecimals(Number((0.05 * state.itemsPrice).toFixed(2)))
  );
  //Calculate total price
  state.totalPrice = Number(
    (state.itemsPrice + state.shippingPrice + state.taxPrice).toFixed(2)
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
