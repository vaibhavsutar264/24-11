import ChartImg from '../../../assets/images/svg/Chart.svg'
import PieChartImg from '../../../assets/images/svg/PieCharts.svg'
import SalesImg from '../../../assets/images/svg/Sales.svg'
import VoiceImg from '../../../assets/images/svg/Voice.svg'
import ChatImg from '../../../assets/images/svg/Chat.svg'
import VideoImg from '../../../assets/images/svg/Video.svg'
import WhatsappImg from '../../../assets/images/svg/Whatsapp.svg'
import Box from '@mui/material/Box'
import { useDarkMode } from '../../../themes/useDarkMode'
import { darkTheme, lightTheme } from '../../../themes/globalStyles'

const BackgroundBox = () => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    // Background animation
    <Box sx={{ flexGrow: 1 }} className="account__form__animation">
      <div className="floating-wrapper">
        <div className="floating-wrapper-inner">
          <div className="floating-item floating-item-1">
            <img src={ChartImg} alt="Chart" />
          </div>
          <div className="floating-item floating-item-2">
            <img src={PieChartImg} alt="Pie Chart" />
          </div>
          <div className="floating-item floating-item-3">
            <img src={SalesImg} alt="Sales" />
          </div>
          <div className="floating-item floating-item-4">
            <img src={VoiceImg} alt="Voice" />
          </div>
          <div className="floating-item floating-item-5">
            <img src={ChatImg} alt="Chat" />
          </div>
          <div className="floating-item floating-item-6">
            <img src={VideoImg} alt="Video" />
          </div>
          <div className="floating-item floating-item-7">
            <img src={WhatsappImg} alt="Whatsapp" />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default BackgroundBox
