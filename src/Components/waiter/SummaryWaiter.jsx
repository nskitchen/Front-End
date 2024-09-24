import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import AddRemark from "./AddRemark";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../store/actions/menuActions";

const SummaryWaiter = () => {
  const [openRemark, setopenRemark] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to track the current item
  const {tableNumber} = useSelector((state) => state.tables);
  const {menu} = useSelector((state) => state.menu);
  const {cart} = useSelector(state => state.orders)
  const dispatch = useDispatch()
  const handleRemark = (item) => {
    setSelectedItem(item)
    setopenRemark(true);
  };
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const newMenu = menu?.filter((e)=>cart.some((f)=>f.id == e._id))
  console.log(cart)

  return (
    <div className="w-full mont">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl boldf">Table {tableNumber}</h1>
        <h3>{new Date().toLocaleTimeString('en-US', { hour12: true,hour: '2-digit',minute: '2-digit', })}</h3>
      </div>
      {/* <div className="w-full text-lg flex items-center justify-between">
        <h3>Serve 01</h3>
        <h3>Order no. #315</h3>
      </div> */}
      <div className="flex flex-col gap-3 mt-4">
        {newMenu?.map((item)=>(
          <SummaryCard item={item} handleRemark={handleRemark} />
        ))}
        <AddRemark item={selectedItem} isModalOpen={openRemark} setIsModalOpen={setopenRemark} />
      </div>
    </div>
  );
};

export default SummaryWaiter;
