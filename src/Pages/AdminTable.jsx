import React, { useEffect } from 'react'
import AdminSidebar from '../Components/admin/AdminSidebar'
import TableManagement from '../Components/admin/TableManagement'
import { useDispatch, useSelector } from 'react-redux'
import { setTables } from '../store/actions/tableActions'

const AdminTable = () => {
  const dispatch = useDispatch();
  const { tables } = useSelector((state) => state.tables);
  const {food} = useSelector((state)=>state.menu)

  console.log(tables);

  useEffect(() => {
    dispatch(setTables(food))

  }, []);
  return (
    <div className="w-full h-screen bg-[#EEEEEE] flex">
      <AdminSidebar data={"table"} />
      <div className="w-full h-full overflow-y-auto  relative">
        <div className="flex w-full items-center justify-between font-bold text-[#6E39CB] p-7">
          <h1>Tables</h1>
          <h1>Wednesday, 12 Jul 2024 </h1>
        </div>
        <TableManagement tables={tables}/>
      </div>
    </div>
  )
}

export default AdminTable