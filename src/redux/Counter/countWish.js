import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "countHeart",
  initialState: { number: 1 },
  reducers: {
    addCount: (state, action) => {
      state.number += 1;
    },
  },
});

export const { addCount } = counterSlice.actions;
export default counterSlice.reducer;
