import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage.jsx'
import { LoginPage } from './pages/loginPage.jsx'
import { RegisterPage } from './pages/registerPage.jsx'
import './styles/bodym.css'


function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/loginPage' element={<LoginPage/>} />
    <Route path='/registerPage' element={<RegisterPage/>} />
   </Routes>
   </>
  )
}

export default App
