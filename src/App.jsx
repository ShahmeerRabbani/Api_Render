import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateUser from './Screens/CreateUser'
import './App.css'

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />       
       <Route path="createUser" element={<CreateUser />} /> 
    </Routes>
  )
}

export default App
