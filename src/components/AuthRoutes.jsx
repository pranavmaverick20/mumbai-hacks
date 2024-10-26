import React from 'react'
import Dashboard from './dashboard-01'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Template from './Template'
import Analytics from './Analytics'
import Profile from './Profile'
import Predictor from './Predictor'

const AuthRoutes = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="/" element={<Template />}>
              <Route index path="dashboard" element={<Dashboard />} />
              <Route index path="analytics" element={<><Analytics /></>} />
              <Route index path="predictor" element={<><Predictor /></>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default AuthRoutes
