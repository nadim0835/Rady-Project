import React from 'react'
import Navber from './Components/Navber'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout