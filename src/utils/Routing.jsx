import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import ChefHome from "../Pages/ChefHome";
import AdminStaff from "../Pages/AdminStaff";
import AdminOrderPage from "../Pages/AdminOrderPage";
import AdminCompletedOrder from "../Pages/AdminCompletedOrder";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminMenuPage from "../Pages/AdminMenuPage";
import Login from "../Pages/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import Register from "../Pages/Register";
import { useSelector } from "react-redux";
import WaiterPageTable from "../Pages/Waiter/WaiterPageTable";

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
            <Route path="currentorder" element={<AdminOrderPage />} />
            <Route path="completedorder" element={<AdminCompletedOrder />} />
            <Route path="menu" element={<AdminMenuPage />} />
          </Route>
        )}

        {isAuthenticated && user.role === "waiter" && (
          <Route path="/waiter">
            <Route path="addtable" element={<WaiterPageTable />} />
          </Route>
        )}
        <Route path="/" index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Routing;
