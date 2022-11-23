import { useState, useEffect } from 'react'
import { appThemes, localStorageVar } from '../utils/constants'

export const useDarkMode = () => {
  const [theme, setTheme] = useState(appThemes.LIGHT_THEME)

  const setMode = (mode: any) => {
    window.localStorage.setItem(localStorageVar.THEME_VAR, mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === appThemes.DARK_THEME
      ? setMode(appThemes.LIGHT_THEME)
      : setMode(appThemes.DARK_THEME)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem(localStorageVar.THEME_VAR)
    localTheme ? setTheme(localTheme) : setMode(appThemes.LIGHT_THEME)
  }, [])

  return [theme, toggleTheme]
}
