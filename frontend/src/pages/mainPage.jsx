import React from 'react'
import { Header } from '../components/header'
import { Home } from '../components/home'
import { Products } from '../components/products'
import { About } from '../components/about'
import { Contacts } from '../components/contacts'
import '../styles/bodym.css'


export function MainPage() {


  return (
   <>
   <Header/>
   <Home/>
   <Products/>
   <About/>
   <Contacts/>
   </>
  )
}
