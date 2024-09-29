import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "tables",
  initialState: {
    tables: [],
    currentTable: null,
    tableNumber: null,
  },
  reducers: {
    setTable: (state, action) => {
      state.tables = action.payload;
    },
    setTableNumber: (state, action) => {
      state.tableNumber = action.payload;
    },
  },
});

export const { setTable, setTableNumber } = tableSlice.actions;

export default tableSlice.reducer;
