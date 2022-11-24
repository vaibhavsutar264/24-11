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
import useLocales from '../../../hooks/useLocales'

const BackgroundBox = () => {
  const { t } = useLocales()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    // Background animation
    <Box sx={{ flexGrow: 1 }} className="account__form__animation">
      <div className="floating-wrapper">
        <div className="floating-wrapper-inner">
          <div className="floating-item floating-item-1">
            <img src={ChartImg} alt={t<string>('chart')} />
          </div>
          <div className="floating-item floating-item-2">
            <img src={PieChartImg} alt={t<string>('pieChart')} />
          </div>
          <div className="floating-item floating-item-3">
            <img src={SalesImg} alt={t<string>('sales')} />
          </div>
          <div className="floating-item floating-item-4">
            <img src={VoiceImg} alt={t<string>('voice')} />
          </div>
          <div className="floating-item floating-item-5">
            <img src={ChatImg} alt={t<string>('chat')} />
          </div>
          <div className="floating-item floating-item-6">
            <img src={VideoImg} alt={t<string>('video')} />
          </div>
          <div className="floating-item floating-item-7">
            <img src={WhatsappImg} alt={t<string>('whatsapp')} />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default BackgroundBox
