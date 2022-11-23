import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from '../components/home/HomeScreen'
import Login from '../components/login/login-screen/Login'
import SetPassword from '../components/login/set-password/SetPassword'
import Notfound from '../components/notfound/Notfound'
import PrivateRoutes from '../utils/PrivateRoutes'
import ForgotPassword from '../components/login/forgot-password/ForgotPassword'
import ResetPassword from '../components/login/reset-password/ResetPassword'
import { appRoutes } from '../utils/constants'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path={appRoutes.ROOT} element={<HomeScreen />} />
        <Route path={appRoutes.LOGIN} element={<Login />} />
        <Route path={appRoutes.NOT_FOUND} element={<Notfound />} />
        <Route path={appRoutes.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={appRoutes.RESET_PASSWORD} element={<ResetPassword />} />
        <Route element={<PrivateRoutes />}>
          <Route path={appRoutes.SET_PASSWORD} element={<SetPassword />} />
        </Route>
      </Routes>
    </>
  )
}

export default RouteHandler
