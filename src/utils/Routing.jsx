import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import ChefHome from "../Pages/ChefHome";
import AdminStaff from "../Pages/AdminStaff";
import AdminOrderPage from "../Pages/AdminOrderPage";
import AdminCompletedOrder from "../Pages/AdminCompletedOrder";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminMenuPage from "../Pages/AdminMenuPage";
import AdminTable from "../Pages/AdminTable";
import Login from "../Pages/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import Register from "../Pages/Register";
import { useSelector } from "react-redux";
import WaiterPageTable from "../Pages/Waiter/WaiterPageTable";
import WaiterMenuPage from "../Pages/Waiter/WaiterMenuPage";
import WaiterTable from "../Components/waiter/WaiterTable";
import MenuPage from "../Pages/Menu/MenuPage";
import WaiterSummary from "../Pages/Waiter/WaiterSummary";
import OrderListDetail from "../Components/waiter/OrderListDetail";

function Routing() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {isAuthenticated && user.role === "chef" && (
          <Route path="/chef">
            <Route path="home" element={<ChefHome />} />
          </Route>
        )}

        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="staff" element={<AdminStaff />} />
            <Route path="edit-chef/:id" element={<AdminStaff />} />
            <Route path="currentorder" element={<AdminOrderPage />} />
            <Route path="completedorder" element={<AdminCompletedOrder />} />
            <Route path="menu" element={<AdminMenuPage />} />
            <Route path='table' element={<AdminTable/>}/>
            <Route path='menu/:id' element={<MenuPage/>}/>
          </Route>
        )}

        {isAuthenticated && user.role === "waiter" && (
          <Route path="/waiter">
            <Route path="addtable" element={<WaiterPageTable />} />
            <Route path="menu/:id" element={<WaiterMenuPage />} />
            <Route path="summary" element={<WaiterSummary />} />
            <Route path="orderlist" element={<OrderListDetail />} />
          </Route>
        )}
        <Route path="/" index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Routing;
