import { tableAPI } from "../../utils/Axios";
import { setTable } from "../slices/tableSlice";

export const setTables = () => async (dispatch) => {
    try {
        const { data } = await tableAPI.get(`/`);
        // console.log/(data.data);
        dispatch(setTable(data.data));    
        
    } catch (error) {
      console.error("Error fetching menu by id:", error);
    }
  };

  export const setOrdersToTable = (tableId, user) => async (dispatch) => {
    try {
        const { data } = await tableAPI.post(`/table/${tableId}`, user);
        console.log(data.data);
        dispatch(setTable(data.data));    
    } catch (error) {
      console.error("Error fetching menu by id:", error);
    }
  };