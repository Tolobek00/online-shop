import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    add: (state, action) => {
      state.value += 1;
    },
    dec: (state, action) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});

export const { add } = counterSlice.actions;
export const { dec } = counterSlice.actions;
export default counterSlice.reducer;
