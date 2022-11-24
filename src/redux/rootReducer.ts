import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

// slices
import authReducer from './slices/authSlice'

// =================================

const encryptor = encryptTransform({
  secretKey: '123456',
  onError: (err) => {
    console.log('err', err)
  },
})

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  transforms: [encryptor],
}

const rootReducer = combineReducers({
  auth: authReducer,
})

export { rootPersistConfig, rootReducer }
