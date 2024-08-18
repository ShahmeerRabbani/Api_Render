import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateUser from './Screens/CreateUser'
import './App.css'
import EditUserInfo from './Screens/EditUser'
import SignUp from './Screens/SignUp'
import Login from './Screens/Login'

const App = () => {
  return (
    <div className='App'>
    <Routes>
       <Route path="/" element={<Login />} />       
       <Route path="/signUp" element={<SignUp />} />       
       <Route path="/home" element={<Home />} />       
       <Route path="/createUser" element={<CreateUser />} /> 
       <Route path="/editUser/:id" element={<EditUserInfo />} /> 
    </Routes>
    </div>
  )
}

export default App
