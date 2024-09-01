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


function App() {

  return (
    <>
   <div className="w-full relative overflow-hidden">
    <Routes>
      <Route path='/' index element={<Main/>}/>
      <Route path='/chef'>
      <Route path='home' element={<ChefHome/>}/>
      </Route>
      <Route path='/admin'>
    <Route path='dashboard' element={<AdminDashboard/>}/>
    <Route path='staff' element={<AdminStaff/>}/>
    <Route path='currentorder' element={<AdminOrderPage/>}/>
    <Route path='completedorder' element={<AdminCompletedOrder/>}/>
    <Route path='menu' element={<AdminCompletedOrder/>}/>
      </Route>
    </Routes>
   </div>
    </>
  )
}

export default App
