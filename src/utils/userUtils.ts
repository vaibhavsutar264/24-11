import { localStorageVar } from './constants'

export const getUserFromStorage = () => {
  const userData = localStorage.getItem(localStorageVar.USER_VAR)
  if (userData) {
    return JSON.parse(userData)
  }
  return userData
}
