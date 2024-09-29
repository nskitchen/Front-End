import { tableAPI } from "../../utils/Axios";
import { setTable } from "../slices/tableSlice";

export const setTables = () => async (dispatch) => {
    try {
      const { data } = await tableAPI.get(`/`);
      dispatch(setTable(data.data));    
    } catch (error) {
      console.error("Error fetching menu by id:", error);
    }
};
 
export const addTable = (tableNumber) => async (dispatch) => {
  try {
    if(!tableNumber) return
    await tableAPI.put('/create', { number: tableNumber  });
    dispatch(setTables());
  } catch (error) {
    console.error("Error adding table:", error);
  }
};

export const removeTable = (tableNumber) => async (dispatch) => {
  try {
    await tableAPI.delete(`/remove/${tableNumber}`);
    dispatch(setTables());
  } catch (error) {
    console.error("Error removing table:", error);
  }
};
