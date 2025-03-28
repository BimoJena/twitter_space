import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import First from './components/First'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  // const login = window.localStorage.getItem('isLoggedIn');
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<First />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App