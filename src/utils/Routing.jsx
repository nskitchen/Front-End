import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import ChefHome from "../Pages/ChefHome";
import AdminStaff from "../Pages/AdminStaff";
import AdminOrderPage from "../Pages/AdminOrderPage";
import AdminCompletedOrder from "../Pages/AdminCompletedOrder";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminMenuPage from "../Pages/AdminMenuPage";
import AdminTable from "../Pages/AdminTable";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { useSelector } from "react-redux";
import WaiterPageTable from "../Pages/Waiter/WaiterPageTable";
import WaiterMenuPage from "../Pages/Waiter/WaiterMenuPage";
import MenuPage from "../Pages/Menu/MenuPage";
import WaiterSummary from "../Pages/Waiter/WaiterSummary";
import OrderListDetail from "../Components/waiter/OrderListDetail";
import WaiterOrder from "../Pages/Waiter/WaiterOrder";
import Notification from "../Pages/Waiter/Notification";
import MenuItems from "../Pages/Menu/MenuItems";
import AdminOrderHistory from "../Pages/AdminOrderHistory";

function Routing() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // if(!isAuthenticated){
  //   return <Navigate to="/login" />
  // }

  return (
    <>
      <Routes>
        {isAuthenticated && (user.role === "admin" || user.role === "chef") && (
          <Route path="/chef" element={<ChefHome />}/>
        )}

        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="staff" element={<AdminStaff />} />
            <Route path="edit-chef/:id" element={<AdminStaff />} />
            <Route path="currentorder" element={<AdminOrderPage />} />
            <Route path="completedorder" element={<AdminCompletedOrder />} />
            <Route path="allorders" element={<AdminOrderHistory />} />
            <Route path="menu" element={<AdminMenuPage />} />
            <Route path='table' element={<AdminTable/>}/>
            <Route path='menu/:id' element={<MenuPage/>}/>
          </Route>
        )}

        {isAuthenticated && (user.role === "admin" || user.role === "waiter") && (
          <Route path="/waiter">
            <Route path="addtable" element={<WaiterPageTable />} />
            <Route path="menu" element={<WaiterMenuPage />} />
            <Route path="summary" element={<WaiterSummary />} />
            <Route path="orderlist" element={<WaiterOrder />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        )}
        <Route path="/" index element={<Main />} />
        <Route path="/menu" element={<MenuItems/>}/>
        <Route path="/pos" element={<OrderRecipt/>}/>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default Routing;
