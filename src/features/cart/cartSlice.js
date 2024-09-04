import { createSlice } from "@reduxjs/toolkit";

// const fakeCart = [
//   // {
//   //   pizzaId: 12,
//   //   name: "Mediterranean",
//   //   quantity: 2,
//   //   unitPrice: 16,
//   //   totalPrice: 32,
//   // },
//   // {
//   //   pizzaId: 6,
//   //   name: "Vegetale",
//   //   quantity: 1,
//   //   unitPrice: 13,
//   //   totalPrice: 13,
//   // },
//   // {
//   //   pizzaId: 11,
//   //   name: "Spinach and Mushroom",
//   //   quantity: 1,
//   //   unitPrice: 15,
//   //   totalPrice: 15,
//   // },
// ];

const initialState = {
  cart: [],
  // cart: fakeCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      // payload = new item
      state.cart.push(action.payload);
    },
    deletePizza(state, action) {
      // payload = pizza ID
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    incPizza(state, action) {
      // payload = pizza ID
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    decPizza(state, action) {
      // payload = pizza ID
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
      if (pizza.quantity === 0)
        cartSlice.caseReducers.deletePizza(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addPizza, deletePizza, incPizza, decPizza, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalBill = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

// 如果 quantity 是 null 或 undefined，则返回 0
export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
