import React, { useState } from "react";
import Dashboard from "../Components/admin/Dashboard";
import AdminSidebar from "../Components/admin/AdminSidebar";
import AdminMenu from "../Components/admin/AdminMenu";
import MenuEditPage from "../Components/admin/MenuEditPage";
import AddCategoryPage from "../Components/admin/AddCategoryPage";
import { getMenu } from "../store/actions/menuActions";
import { useDispatch } from "react-redux";

const AdminMenuPage = () => {
  const [edit, setedit] = useState("");
  const [addCategory, setAddCategory] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false)

  const dispatch = useDispatch();

  const handleOutOfStock = () => {
    setOutOfStock(!outOfStock);
    console.log(!outOfStock);
    dispatch(getMenu(null, null, !outOfStock));
  };
  
  return (
    <div className="w-full h-screen bg-[#EEEEEE] flex">
      <AdminSidebar data={"menu"} />
      <div className="w-full h-full overflow-y-auto relative">
        <div className="flex w-full items-center justify-between font-bold  p-7">
          <h1 className="text-2xl">Menu Management</h1>
          <h1 onClick={handleOutOfStock} className={`${outOfStock ? 'bg-[#FF8144] text-white' : 'bg-white'} cursor-pointer text-[#FF8144] border-[1px] border-[#FF8144]  px-3 py-1 rounded-md`}>Out Of Stock Item</h1>
        </div>
        {addCategory &&
          <div className="fixed inset-0 z-50">
            <AddCategoryPage edit={addCategory} setedit={setAddCategory} />
          </div>
        }
        {edit ? (
          <div className="fixed inset-0 z-50">
            <MenuEditPage edit={edit} setedit={setedit} />
          </div>
        ) : (
          <AdminMenu outOfStock={outOfStock} setedit={setedit} setcategory={setAddCategory} />
        )}
      </div>
    </div>
  );
};

export default AdminMenuPage;
