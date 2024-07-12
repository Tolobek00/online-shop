import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Counter/counterSlice";
import wishReducer from "./Wishlist/wishlistSlice"
// import addToCart from "./Cart/CartSlice"
import CartSlice from "./Cart/CartSlice";
import userReducer from "./user/userSlice";




const store = configureStore({
  reducer: {
    count: countReducer,
    wishItem: wishReducer,
    CartItem: CartSlice,
    user: userReducer,
  },
});

export default store;

