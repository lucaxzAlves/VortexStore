import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage.jsx'
import { LoginPage } from './pages/loginPage.jsx'
import { RegisterPage } from './pages/registerPage.jsx'
import { AddProductsPage } from './pages/addProduct.jsx'
import './styles/bodym.css'


function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/loginPage' element={<LoginPage/>} />
    <Route path='/registerPage' element={<RegisterPage/>} />
    <Route path='/addProductPage' element={<AddProductsPage/>} />
   </Routes>
   </>
  )
}

export default App
