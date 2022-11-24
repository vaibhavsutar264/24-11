import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from '../store'
import { UserLogin, Password, Email, AuthState } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
} from '../../hooks/useLocalStorage'
import { user } from '../../services/api/index'
import { localStorageVar } from '../../utils/constants'
import axios from 'axios'

const initialState: AuthState = {
  user: null,
  profile: undefined,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  message: '',
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
      state.isAuthenticated = false
    },
    hasError(state, action) {
      state.isLoading = false
      state.isError = true
      state.isAuthenticated = false
      state.message = action.payload.data?.message as string
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload.token
      state.isAuthenticated = true
      state.message = action.payload.message
    },
    setPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    forgotPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    resetPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    logOutSuccess: (state) => {
      state.isLoading = false
      state.user = null
      state.isAuthenticated = false
    },
  },
})

// reducers
export default userSlice.reducer

// actions
export const { startLoading, hasError } = userSlice.actions

// -----------------------------------------------------------------

export const login = (userData: UserLogin) => {
  // dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await user.login(userData)
      if (response) {
        setInLocalStorage(
          localStorageVar.USER_VAR,
          JSON.stringify(response.data)
        )
        const token: any = response.data.token
        if (token) {
          setInLocalStorage(localStorageVar.TOKEN_VAR, token)
        }
      }
      dispatch(userSlice.actions.loginSuccess(response.data))
      return response.data
    } catch (error) {
      console.log(error)
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const logout = () => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      removeFromLocalStorage(localStorageVar.TOKEN_VAR)
      removeFromLocalStorage(localStorageVar.USER_VAR)
      await user.logout()
      dispatch(userSlice.actions.logOutSuccess())
    } catch (error) {
      console.log(error)
      dispatch(userSlice.actions.hasError(error))
    }
  }
}
export const updatePassword = (passwordData: Password) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await user.updatePassword(passwordData)
      dispatch(userSlice.actions.setPasswordSuccess(response.data))
      return response.data
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const forgotPassword = (userEmail: Email) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await user.forgotPassword(userEmail)
      dispatch(userSlice.actions.forgotPasswordSuccess(response.data))
      return response.data
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const resetPassword = (token: any, passwordData: Password) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data } = await user.resetPassword(token, passwordData)
      dispatch(userSlice.actions.resetPasswordSuccess(data))
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}
