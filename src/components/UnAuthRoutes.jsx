import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Template from './Template';
import Sign from './Sign';
import LandingPage from './LandingPage';
import Dashboard from './dashboard-01';

const UnAuthRoutes = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="/" element={<Template />}>
              <Route index path="home" element={<LandingPage />} />
              <Route index path="sign" element={<Sign />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default UnAuthRoutes
