import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Main from './Components/Main'
import ChefHome from './Pages/ChefHome'
import AdminStaff from './Pages/AdminStaff'
import AdminOrderPage from './Pages/AdminOrderPage'
import AdminCompletedOrder from './Pages/AdminCompletedOrder'
import AdminDashboard from './Pages/AdminDashboard'
import AdminMenuPage from './Pages/AdminMenuPage'
import Login from './Pages/Login'
import WaiterPageTable from './Pages/Waiter/WaiterPageTable'
import WaiterMenuPage from './Pages/Waiter/WaiterMenuPage'
import WaiterSummary from './Pages/Waiter/WaiterSummary'
import WaiterOrder from './Pages/Waiter/WaiterOrder'
import NotificationWaiter from './Pages/Waiter/NotificationWaiter'
import MenuPage from './Pages/Menu/MenuPage'


function App() {

  return (
    <>
   <div className="w-full relative overflow-hidden">
    <Routes>
      <Route path='/' index element={<Main/>}/>
      <Route path='/login'  element={<Login/>}/>
      
      <Route path='/chef'>
      <Route path='home' element={<ChefHome/>}/>
      </Route>
      <Route path='/admin'>
    <Route path='dashboard' element={<AdminDashboard/>}/>
    <Route path='staff' element={<AdminStaff/>}/>
    <Route path='currentorder' element={<AdminOrderPage/>}/>
    <Route path='completedorder' element={<AdminCompletedOrder/>}/>
    <Route path='menu' element={<AdminMenuPage/>}/>
      </Route>
      <Route path='/waiter'>
    <Route path='table' element={<WaiterPageTable/>}/>
    <Route path='menu' element={<WaiterMenuPage/>}/>
    <Route path='summary' element={<WaiterSummary/>}/>
    <Route path='orderlist' element={<WaiterOrder/>}/>
    <Route path='notification' element={<NotificationWaiter/>}/>
  
      </Route>
      <Route path='/menu' element={<MenuPage/>}/>
    </Routes>
   </div>
    </>
  )
}

export default App
