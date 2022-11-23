import React, { SyntheticEvent, useEffect, useState } from 'react'
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from '../../../redux/store'
import { Email } from '../../../types/authType'
import { forgotPassword } from '../../../redux/slices/authSlice'
import { toast } from 'react-toastify'
// Importing Material UI
import {
  Box,
  TextField,
  InputLabel,
  styled,
  Button,
  ButtonProps,
  FormGroup,
  FormControl,
} from '@mui/material'
import { purple } from '@mui/material/colors'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
// Importing Images
import Background from '../../../assets/images/login-bg.jpg'
import ChartImg from '../../../assets/images/svg/Chart.svg'
import PieChartImg from '../../../assets/images/svg/PieCharts.svg'
import SalesImg from '../../../assets/images/svg/Sales.svg'
import VoiceImg from '../../../assets/images/svg/Voice.svg'
import ChatImg from '../../../assets/images/svg/Chat.svg'
import VideoImg from '../../../assets/images/svg/Video.svg'
import WhatsappImg from '../../../assets/images/svg/Whatsapp.svg'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  height: '70px',
  width: '100%',
  borderRadius: '35px',
  mixBlendMode: 'luminosity',
  opacity: 0.5,
  '&:hover': {
    backgroundColor: purple[700],
  },
}))

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const { isError, isSuccess, message } = useAppSelector(
    (state: any) => state.auth
  )
  const [email, setEmail] = useState('')

  const forgotPasswordSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const userEmail: Email = {
      email: email,
    }
    dispatch(forgotPassword(userEmail))
  }

  useEffect(() => {
    if (isError) {
      console.log('error in forgot password')
      toast.error(message)
    }

    if (isSuccess) {
      toast.success(message)
    }
  }, [isError,isSuccess, message])
  return (
    <Box className="account__screen">
      {/* ACCOUNT SCREEN BANNER START*/}
      <picture>
        {' '}
        <source srcSet={Background} type="image/webp" />{' '}
        <source srcSet={Background} type="image/png" />{' '}
        <img src={Background} className="account__screen__banner" alt="" />{' '}
      </picture>
      {/* ACCOUNT SCREEN BANNER END */}
      {/* ACCOUNT SCREEN ANIMATION START */}
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
      {/* ACCOUNT SCREEN ANIMATION END */}
      {/* ACCOUNT FORM START */}
      <Box sx={{ flexGrow: 1 }} id="login-form" className="account__form">
        <div className="form__inner">
          <Box sx={{ width: 1 }} className="account__form__header">
            <h3 className="title">Forgot Password?</h3>
          </Box>
          <Box
            sx={{ flexGrow: 1, paddingTop: '0 !important' }}
            className="account__form__body"
          >
            <form onSubmit={forgotPasswordSubmit} action="#" method="post">
              <FormGroup>
                <FormControl
                  className="input-wrapper success"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    position: 'relative',
                    width: 1,
                    margin: '20px 0px',
                  }}
                >
                  <InputLabel htmlFor="username" className="label__icon">
                    <MailOutlineIcon id="mail-icon" />
                  </InputLabel>
                  <TextField
                    required
                    id="username"
                    label="Enter your email ID"
                    variant="standard"
                    sx={{ width: 1 }}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl
                  className="input-wrapper submitBtn"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    position: 'relative',
                    width: 1,
                    marginTop: '50px',
                  }}
                >
                  <ColorButton
                    type="submit"
                    variant="contained"
                    className="customBtn-01"
                  >
                    GET LINK
                  </ColorButton>
                </FormControl>
              </FormGroup>
            </form>
          </Box>
        </div>
      </Box>
      {/* ACCOUNT FROM END */}
    </Box>
  )
}

export default ForgotPassword
