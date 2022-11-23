import './i18n'
import Header from './components/header/Header'
import { Toggle } from './themes/Toggle'
import { useDarkMode } from './themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles'
import { ThemeProvider } from 'styled-components'
import useAuth from './hooks/useAuth'
import Routes from './route/Routes'
import './assets/sass/global/global.scss'
import { appThemes } from './utils/constants'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  useAuth()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === appThemes.LIGHT_THEME ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
      <Routes />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
