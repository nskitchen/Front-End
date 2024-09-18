import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/userSlice";
import { menuSlice } from "./slices/menuSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer,
  },
});
