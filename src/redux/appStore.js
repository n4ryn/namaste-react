import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
