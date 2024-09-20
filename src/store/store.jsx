import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/userSlice";
import { menuSlice } from "./slices/menuSlice";
import { tableSlice } from "./slices/tableSlice";
import { orderSlice } from "./slices/orderSlice";


export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer,
    tables: tableSlice.reducer,   
    orders: orderSlice.reducer,
  },
});
