import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addtocart: (state, action) => {
      var myitem = state.cart.filter((key) => key.id === action.payload.id);
      if (myitem.length >= 1) {
        toast.warn("This product is already in the cart");
      } else {
        state.cart.push(action.payload);
        toast.success("Successfully added to cart");
      }
    },
    qtyIncrease: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.cart[i].quantity++;
        }
      }
    },
    qtyDecrease: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          if (state.cart[i].quantity > 1) {
            state.cart[i].quantity--;
          } else {
            toast.warn("Quantity must be greater than 1");
          }
        }
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      toast.success("Successfully removed from cart");
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart cleared successfully");
    },

  },
});

export const { addtocart, qtyIncrease, qtyDecrease, removeCart,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
