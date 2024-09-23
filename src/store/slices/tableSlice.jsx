import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "tables",
  initialState: {
    tables: null,
    currentTable: null,
    tableNumber: null,
  },
  reducers: {
    setTable: (state, action) => {
      state.tables = action.payload;
    },
    setCurrentTable: (state, action) => {
      state.currentTable = action.payload;
    },
    setTableNumber: (state, action) => {
      state.tableNumber = action.payload;
    },
  },
});

export const { setTable, setCurrentTable, setTableNumber } = tableSlice.actions;

export default tableSlice.reducer;
