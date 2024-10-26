import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import AuthHeader from './AuthHeader';

const Template = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  )
}

export default Template
