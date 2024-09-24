import { tableAPI } from "../../utils/Axios";
import { setTable } from "../slices/tableSlice";

export const setTables = () => async (dispatch) => {
    try {
      const { data } = await tableAPI.get(`/`);
      const tables = Array.from({ length: 12 }, (_, index) => {
        const id = index + 1;    
        const tableData = data.data.find((table) => table.id === id);
        return {
          number: id,
          status: tableData ? tableData.status : "available",
        };
      });
      dispatch(setTable(tables));    
    } catch (error) {
      console.error("Error fetching menu by id:", error);
    }
  };
