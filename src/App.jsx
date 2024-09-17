import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import ChefHome from "./Pages/ChefHome";
import AdminStaff from "./Pages/AdminStaff";
import AdminOrderPage from "./Pages/AdminOrderPage";
import AdminCompletedOrder from "./Pages/AdminCompletedOrder";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminMenuPage from "./Pages/AdminMenuPage";
import Login from "./Pages/Login";
import WaiterPageTable from "./Pages/Waiter/WaiterPageTable";
import WaiterMenuPage from "./Pages/Waiter/WaiterMenuPage";
import WaiterSummary from "./Pages/Waiter/WaiterSummary";
import WaiterOrder from "./Pages/Waiter/WaiterOrder";
import NotificationWaiter from "./Pages/Waiter/NotificationWaiter";
import MenuPage from "./Pages/Menu/MenuPage";
import Routing from "./utils/Routing";
import { getCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <Routing />
      </div>
    </>
  );
}

export default App;
