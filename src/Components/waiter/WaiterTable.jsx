import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTables } from "../../store/actions/tableActions";
import { setTableNumber } from "../../store/slices/tableSlice";


const WaiterTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tables } = useSelector((state) => state.tables);
 
   
  useEffect(() => {
    dispatch(setTables())
  }, [dispatch]);


  const handleTableClick = (table) => {
    if(table.status === "available"){
      dispatch(setTableNumber(table.number));
      navigate(`/waiter/menu`);
    }
    else if(table.status === "reorder"){
      dispatch(setTableNumber(table.number));
      navigate(`/waiter/menu`);
    }
  };
  
  return (
    <div className="w-full mont h-full">
      <div className="mt-[0.5vh] flex items-center justify-between">
        <h1 className="text-lg font-semibold">Select Table</h1>
        <h4 className="font-light">{tables.filter((tab)=>tab.status == "available").length} Available</h4>
      </div>
      <div className="w-[85%] py-10  grid grid-cols-3 gap-5 gap-x-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] overflow-y-auto ">
          {tables.map((table,idx)=>(
            <div
              key={idx} onClick={()=>handleTableClick(table)} className={`h-[20vw] w-[20vw] flex rounded-lg items-center justify-center border-[1px] border-black 
                ${table.status == "available" ? "bg-white" : table.status == "reorder" ? "bg-[#9747FF] text-white" : "bg-neutral-300 pointer-events-none text-white border-none"}`}>
                <h1 className="text-2xl font-bold">T {table.number}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WaiterTable;
