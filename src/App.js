import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/Register'element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App