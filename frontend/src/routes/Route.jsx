import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctoreDetails from '../pages/Doctors/DoctoreDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';



function Routers() {
  return (<>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctoreDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}> <MyAccount /> </ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}> <Dashboard /> </ProtectedRoute>} />
    </Routes>
  </>
  )
}

export default Routers