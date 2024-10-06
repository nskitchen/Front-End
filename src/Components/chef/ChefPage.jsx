import React, { useEffect } from "react";
import ChefCard from "./ChefCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersss } from "../../store/actions/orderActions";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/actions/userActions";

const ChefPage = () => {
  const {user} = useSelector((state) => state.auth);
  const {allOrders} = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const success = await dispatch(logoutUser());
    if (success) {
      navigate('/login'); // Navigate to login page after logout
    }
  };

  useEffect(() => {
    let intervalId;

    const fetchOrders = () => {
      dispatch(getAllOrdersss());
    };

    fetchOrders(); // Initial fetch
    intervalId = setInterval(fetchOrders, 30000); // Fetch every 30 seconds

    return () => {
      clearInterval(intervalId); // Clear interval on unmount
    };
  }, [dispatch]);

  
  return (
    <div className="w-full text-black min-h-screen bg-[#EEEEEE] px-12 max-md:px-6">

      <nav className="flex items-center justify-between  py-4">
        <div className="flex items-center gap-2">
         {user.role == "admin" && 
        <button onClick={()=>navigate("/admin/dashboard")} className="border border-black h-10 w-10 rounded-full">
          <i className="ri-arrow-left-s-line"></i>
        </button>}
        <h1
          className="mont text-2.3s max-md:text-xl"
          style={{ fontWeight: "900" }}
          >
          Pending Order
        </h1>
        </div>
        <h3 className="text-xl flex items-center gap-5 mont max-md:text-base">
          <div>
            Total Orders{" "}
          <span className="text-[#FF8144]" style={{ fontWeight: "900" }}>
            {allOrders.reduce((acc, order) => { 
              if (order.status !== "pending") return acc
              const pendingItemsCount = order.orders.reduce((count, item) => {   
                return count + item.items.filter(i => i.status === "pending").length 
              }, 0); 
              return acc + pendingItemsCount; 
            }, 0)}
          </span>
          </div>
          <button onClick={handleLogout} className="w-12 h-12 rounded-md text-white bg-black flex items-center justify-center"><i className="ri-logout-box-r-line text-xl"></i></button>
        </h3>
      </nav>
      <div className="grid grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full text-gray-500 max-md:hidden">
        <h3>Item Name</h3>
        <h3>Quantity</h3>
        <h3>Remark</h3>
        <h3>Order Type</h3>
        <h3>Status</h3>
      </div>
      <div className="flex flex-col py-10 gap-10">
        {
          allOrders && allOrders.map((order) => {
            if(order.status == "pending"){
              return <ChefCard key={order._id} order={order} />
            }
          })
        }  
      </div>
    </div>
  );
};

export default ChefPage;
