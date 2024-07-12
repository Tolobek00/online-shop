import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "wishlist",
  initialState: { cartCount: [] },
  reducers: {
    addCart: (state, action) => {
      const createCart = state.cartCount.find((x) => x.id == action.payload.id);

      if (!createCart) {
        state.cartCount.push({...action.payload, quantity: 1});
        toast.success("Товар успешно добовлен в корзину");
      }
      else {
        toast.error("Товар уже в Корзине!")
      }
    },

    removeCart: (state, action) => {  
      state.cartCount = state.cartCount.filter((x) => x.id !== action.payload);
    },

    incrementQuantity:(state,action) => {
      const createCart = state.cartCount.find((x) => x.id == action.payload
    );

    if(createCart) {
      createCart.quantity +=1
    }

    },
    decrementQuantity:(state,action) => {
      const createCart = state.cartCount.find((x) => x.id == action.payload
    );

     if(createCart.quantity >1) {
      createCart.quantity -=1

    }

    },
    
  },
});

export const { addCart, removeCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
