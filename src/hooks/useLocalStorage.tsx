export const getFromLocalStorage = (key: string) => {
  const getValue = window.localStorage.getItem(key)
  return getValue
}

export const setInLocalStorage = (key: string, newValue: string) => {
  const setValue = window.localStorage.setItem(key, newValue)
  return setValue
}

export const removeFromLocalStorage = (key: string) => {
  if (localStorage.getItem(key)) {
    window.localStorage.removeItem(key)
  }
}
