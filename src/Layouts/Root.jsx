import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Root = () => {
  return (
    <div className='bg-[#F5F5F5] '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root