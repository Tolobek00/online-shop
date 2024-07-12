import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    token: localStorage.getItem("accesToken") || null,
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("accesToken", action.payload);
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
    },
    clearUser: (state) => {
      localStorage.removeItem("accesToken");
      state.name = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser, setToken } = userSlice.actions;
export default userSlice.reducer;
