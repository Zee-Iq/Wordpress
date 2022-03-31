import React from 'react'
import { Header } from '../Header/Header'
import Login from '../login/Login'
import Register from '../RegisterForm/Register'
import Sidebar from '../Sidebar'
import FAQ from '../FAQ'



export const Layout = () => {
  return (
      <>
    <Header />
    <Register />
    <Sidebar />
    <FAQ />
    
    </>
  )
}
