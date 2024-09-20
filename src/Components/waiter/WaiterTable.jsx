import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTables, setOrdersToTable } from "../../store/actions/tableActions";
import { setTableNumber } from "../../store/slices/tableSlice";
import { CreateNewOrders, getAllOrdersss } from "../../store/actions/orderActions";
import { getMenu } from "../../store/actions/menuActions";
import { setOrderID } from "../../store/slices/orderSlice";
const WaiterTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tables } = useSelector((state) => state.tables);
  const { user } = useSelector((state) => state.auth);
  const { food } = useSelector((state) => state.menu);
 

  useEffect(() => {
    dispatch(setTables())
    dispatch(getAllOrdersss());;
    dispatch(getMenu(food));

  }, []);

  const handleTableClick = (table) => {
    dispatch(setTableNumber(table.tableNumber));
    if(table.isBooked === false && table.user != user._id){
      dispatch(setOrdersToTable(table._id, user));
      dispatch(CreateNewOrders({table: table.tableNumber, user: user._id}));
      
      navigate(`/waiter/menu/${table.tableNumber}`);
    }
    else if(table.isBooked === true && table.user === user._id){
      dispatch(setOrderID(table._id));
      navigate(`/waiter/menu/${table.tableNumber}`);
    }
    else{
      alert("Table is already booked");
    }
    // Add your desired action here
  };

  
  return (
    <div className="w-full mont h-full">
      <div className="mt-[0.5vh] flex items-center justify-between">
        <h1 className="text-lg font-semibold">Select Table</h1>
        <h4 className="font-light">6 Available</h4>
      </div>
      <div className="w-[85%] py-10  grid grid-cols-3 gap-5 gap-x-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[54%] overflow-y-auto ">
        {tables?.map((table, index) => (
          <div
            key={index}
            className={`h-[20vw] w-[20vw] flex rounded-lg items-center justify-center border-[1px] border-black 
              
              ${
                table.user === user._id
                  ? table.isBooked
                    ? "bg-[#9747FF] text-white" // Dark blue for tables booked by the current user
                    : "bg-white" // White for unbooked tables assigned to the current user
                  : table.user
                    ? "bg-gray-400 cursor-not-allowed text-white border-none" // Gray for tables used by other users
                    : "bg-white" // White for unassigned tables
              }`}
              onClick={() => handleTableClick(table)}
          >
            {table?.isBooked ? (
              <h1 className="text-2xl bold">T {table?.tableNumber}</h1>
            ) : (
              <h1 className="text-2xl bold">T {table?.tableNumber}</h1>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaiterTable;
