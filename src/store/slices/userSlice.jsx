import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loginError: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { setUser, removeUser, setLoginError } = authSlice.actions;

export default authSlice.reducer;
