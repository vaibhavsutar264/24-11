export const apiRoutes = {
  BASE_URL: 'http://localhost:4000',
  LOGIN: '/api/v1/login',
  MOCKLOGIN: '/auth/login',
  SET_PASSWORD: '/api/v1/password/update',
  FORGOT_PASSWORD: '/api/v1/password/forgot',
  RESET_PASSWORD: '/api/v1/password/reset',
  LOGOUT: '/api/v1/logout',
}

export const apiHelpers = {
  HEADER_AUTHORIZATION: 'Authorization',
  HEADER_CONTENT_TYPE: 'Content-Type',
  TOKEN_TYPE: 'Bearer',
  CONTENT_TYPE_APP_JSON: 'application/json',
}

export const appThemes = {
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',
}

export const localStorageVar = {
  THEME_VAR: 'theme',
  TOKEN_VAR: 'token',
  USER_VAR: 'user',
  I18_LANG_VAR: 'i18nextLng',
  LANG_VAR: 'lng',
}

export const thunkPaths = {
  LOGIN_THUNK: 'auth/login',
  LOGOUT_THUNK: 'auth/logout',
  UPDATEPASSWORD_THUNK: 'auth/updatePassword',
}

export const slices = {
  AUTH_SLICE: 'auth',
}

export const typeVar = {
  IMAGE_WEBP: 'image/webp',
  IMAGE_PNG: 'image/png',
}

export const appRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  CHECK_PROTECTED: '/checkprotected',
  SET_PASSWORD: '/setpassword',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/password/reset/:token',
  NOT_FOUND: '*',
  DASHBOARD: '/dashboard',
}
