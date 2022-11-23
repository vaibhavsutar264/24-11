import { Outlet, Navigate } from 'react-router-dom'
import { getFromLocalStorage } from '../hooks/useLocalStorage'
import { appRoutes, localStorageVar } from './constants'

const PrivateRoutes = () => {
  const auth = getFromLocalStorage(localStorageVar.TOKEN_VAR)
  return auth && auth !== null ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />
}

export default PrivateRoutes
