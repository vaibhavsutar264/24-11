import { getFromLocalStorage } from '../hooks/useLocalStorage'
import { localStorageVar } from './constants'

export const getUserFromStorage = () => {
  const userData = getFromLocalStorage(localStorageVar.USER_VAR)
  if (userData) {
    return JSON.parse(userData)
  }
  return userData
}
