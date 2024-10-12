import React, { useEffect, useState } from "react";
import AdminSidebar from "../Components/admin/AdminSidebar";
import CompletedBillCard from "../Components/admin/CompletedBillCard";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BillReceipt from "../Components/admin/BillReceipt";
import { getAllBills, getAllOrdersss, getFilterExcel } from "../store/actions/orderActions";
import HistoryBillCard from "../Components/admin/HistoryBillCard";
import BillReceiptHistory from "../Components/admin/BillReceiptHistory";
import { DatePicker, Modal, Button, Spin } from "antd";
import OrderReceipt from "../Components/POS/OrderRecipt";

const AdminOrderHistory = () => {
  const { RangePicker } = DatePicker;
  const { bills, allOrders } = useSelector((state) => state.orders)
  const completedOrders = allOrders?.filter((i) => i.status === "completed")
  const currentOrders = allOrders?.filter((i) => i.status === "pending")
  const [allBills, setAllBills] = useState(bills)
  const [showBill, setShowBill] = useState("")
  const dispatch = useDispatch()
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [search, setSearch] = useState("")

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDownload = async () => {
    setLoading(true); // Start loading
    await dispatch(getFilterExcel(startDate, endDate)); // Replace with your action
    setLoading(false); // Stop loading
  }

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

useEffect(() => {
  dispatch(getAllBills("completed", search, startDate, endDate));
  setAllBills(bills)
}, [dispatch, startDate, endDate, search]);

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const handleSearchChange = debounce((value) => {
  setSearch(value);
}, 400);

return (
  <div className="h-screen w-full bg-[#EEEEEE] flex mont">
    <AdminSidebar data={"order"} />
    <div className="w-full flex flex-col p-7 mont">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[#6E39CB] text-1.7s boldf">Orders</h1>
      </div>
      <div className="flex w-full items-center justify-between max-md:flex-wrap">
        <div className="flex mt-3 gap-3 max-md:grid max-md:grid-cols-2 max-md:place-items-center max-md:place-content-center">
          <NavLink to={"/admin/currentorder"} className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center">
            Current Orders
            <span className="h-full w-[1px] bg-black"></span>
            {currentOrders.length}
          </NavLink>
          <NavLink to={"/admin/completedorder"} className="flex text-lg p-2 px-3 gap-2 text-black rounded-md font-medium items-center bg-white justify-center">
            Completed Orders
            <span className="h-full w-[1px] bg-black"></span>
            {completedOrders?.length}
          </NavLink>
          <NavLink to={"/admin/allorders"} className="flex text-lg p-2 px-3 gap-2 text-white bg-[#FF8144] rounded-md font-medium items-center justify-center">
            Order History
          </NavLink>
          {/* <button className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center max-md:translate-x-1/2 max-md:my-2">
              Order History
            </button> */}
        </div>
        <div className="flex items-center justify-center  rounded-md max-md:w-full">
          {/* <button className="p-2 border-2 bg-white px-3 text-gray-400">
              <i className="ri-filter-3-line"></i>
            </button> */}
          <div>
            <button onClick={showModal} className="p-2 border-2 bg-white px-3 text-gray-400">
              <i className="ri-filter-3-line"></i>
            </button>
            <Modal
              title="Filter"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="back" type="primary" onClick={handleCancel}>
                  Ok
                </Button>,
                <Button key="download" type="primary" onClick={handleDownload} loading={loading}>
                  Download
                </Button>
              ]}
            >
              <RangePicker
                picker="date"
                onChange={(value) => {
                  setStartDate(value[0] ? value[0].toDate() : null);
                  setEndDate(value[1] ? value[1].toDate() : null);
                }}
              />
            </Modal>
          </div>
          <div className="flex items-center justify-center border-2 gap-2 bg-white p-2 rounded-md px-4 w-fit">
            <input
              onChange={(e) => handleSearchChange(e.target.value)}
              type="text"
              className="outline-none w-[15vw] text-sm max-md:w-[90%]"
              placeholder="Search by table no, order id, etc"
            />
            <i className="ri-search-line"></i>
          </div>
        </div>
      </div>
      <div className="flex w-full py-8 px-4 text-xl items-center justify-between boldf text-black max-md:py-2">
        <h1>All Orders</h1>
        <h1>{bills.length}</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 relative overflow-y-auto pr-4 max-md:grid-cols-1 max-md:p-0">
        {showBill && <BillReceiptHistory order={showBill} setShowBillReceipt={setShowBill} />}
        {
          [...bills]?.reverse().map((i) => (
            <>
              <HistoryBillCard setShowBill={setShowBill} key={i._id} payment={i} user={i.user} data={i.order} />
            </>
          ))
        }
      </div>

    </div>
  </div>
);
};

export default AdminOrderHistory;
