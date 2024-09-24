import React from "react";

const TableManagement = ({tables}) => {  
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <div className="w-[70%] flex items-center h-fit  justify-start gap-8 flex-wrap mx-auto max-md:w-full max-h-[70vh] overflow-auto">
        {
          tables && tables.map((table)=>(
            <div
            key={table.id}
            className={`w-24 h-24 text-3xl mont boldf rounded-md flex items-center justify-center border-[1px] border-black ${
              table.isBooked
                ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                : 'cursor-pointer'
            }`}
          >
            T {table.tableNumber}
            
          </div>
            

          ))
        }

        <div className="w-24 bg-black text-white cursor-pointer h-24 text-3xl mont boldf rounded-md flex items-center justify-center border-[1px] border-black">
        <i className="ri-add-large-line"></i>
        </div>
      </div>
    </div>
  );
};

export default TableManagement;
