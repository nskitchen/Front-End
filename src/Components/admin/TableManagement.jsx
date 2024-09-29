import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTables,addTable, removeTable } from "../../store/actions/tableActions";

const TableManagement = ({tables}) => {  

  const [adding, setAdding] = useState(false)
  const [number, setNumber] = useState("")
  const dispatch = useDispatch()

  const addTableHandler = async()=>{
    console.log(number)
    if(!number) setAdding(false)
    dispatch(addTable(number))
    dispatch(setTables())
    setAdding(false)
    setNumber("")
  }  

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <div className="w-[70%] flex items-center h-fit  justify-start gap-8 flex-wrap mx-auto max-md:w-full max-h-[70vh] overflow-auto">
        {
          tables && tables.map((table)=>(
            <div 
            onClick={()=>dispatch(removeTable(table.id))} 
              key={table.id} 
              className={`${table.status != "available" ? "bg-neutral-300 text-neutral-500" : ""} w-24 h-24 text-3xl mont boldf rounded-md flex items-center justify-center border-[1px] border-black relative group`}
            >
              <span className="z-10 group-hover:opacity-0 transition-opacity duration-300">T {table.id}</span>
              <i className="bg-neutral-300 text-black ri-delete-bin-line absolute inset-0 flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
            </div>
          ))
        }
        <div className="w-24 flex-col bg-black text-white cursor-pointer h-24 gap-3 text-3xl mont boldf rounded-md flex items-center justify-center border-[1px] border-black">
          {adding ? <><input type="text" placeholder="No." onInput={(e)=>setNumber(e.target.value)} className="w-3/4 border-none outline-none bg-neutral-700 text-white text-center"/> <i onClick={addTableHandler} className="ri-check-line bg-white text-black w-6 h-6 rounded-full text-[1.2rem] flex items-center justify-center"></i></> : <i onClick={()=>setAdding(true)} className="ri-add-large-line"></i>}
          
        </div>
      </div>
    </div>
  );
};

export default TableManagement;
