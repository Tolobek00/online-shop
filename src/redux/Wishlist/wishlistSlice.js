import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    addWish: (state, action) => {
      const createWish = state.items.find((x) => x.id == action.payload.id);

      if (!createWish) {
        state.items.push(action.payload);
        toast.success("Товар успешно добовлен в список желаемого");
      }
      else {
        toast.error("товар уже в списке желаемого!")
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addWish, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
