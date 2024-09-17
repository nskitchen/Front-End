import React from 'react'
import AdminSidebar from '../Components/admin/AdminSidebar'
import TableManagement from '../Components/admin/TableManagement'

const AdminTable = () => {
  return (
    <div className="w-full mont p-7 h-screen flex">
        <AdminSidebar data={"table"}/>
        <TableManagement/>
    </div>
  )
}

export default AdminTable