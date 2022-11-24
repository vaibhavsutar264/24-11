import React, { FormEvent, useState, useEffect, SyntheticEvent } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updatePassword } from '../../../redux/slices/authSlice'
import { Password } from '../../../types/authType'
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from '../../../redux/store'

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
import LinearProgress from '@mui/material/LinearProgress'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { purple } from '@mui/material/colors'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
// Importing Images
import useLocales from '../../../hooks/useLocales'
import BackgroundBox from '../../common/elements/backGroundBox'
import BannerBg from '../../common/elements/banner'

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

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

const SetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [open, setOpen] = useState(false)
  const { isError, isSuccess, message } = useAppSelector(
    (state: any) => state.auth || {}
  )
  const dispatch = useAppDispatch()
  const { t } = useLocales()
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required('Password is required !!').min(8),
    confirmPassword: Yup.string()
      .required('Password is required !!')
      .min(8)
      .oneOf(
        [Yup.ref('password'), null],
        'Password and Confirm Password must match'
      ),
  })

  const defaultValues = {
    password: '',
    confirmPassword: '',
  }

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  })

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = methods

  const onSubmit = async (data: any) => {
    if (password !== confirmPassword) {
      console.log('password and confirm password not same')
      toast.error('password and confirm password not same')
      return
    }
    try {
      const userPassword: Password = {
        password: password,
        confirmPassword: confirmPassword,
      }
      await dispatch(updatePassword(data))
    } catch (error) {
      console.error(error)
    }
  }
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (isSuccess) {
      setPassword('')
      setConfirmPassword('')
    }
  }, [isError, isSuccess, message, dispatch])

  const handlePasswordChange = (e: SyntheticEvent) => {
    e.preventDefault()
    const tooltipMainBoxElement = document.getElementById(
      'tooltip-main-box'
    ) as HTMLElement
    tooltipMainBoxElement.style.display = 'block'
    setPassword((e.target as HTMLInputElement).value)
    const patternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}" //uppercase lowercase symbol and number
    const uppercaseVariable = '[A-Z]'
    const lowercaseVariable = '[a-z]'
    const symbolVariable = '[^a-zA-Z0-9]'
    const atleastVariable = '.{8,}'
    const atleastFifteenVariable = '.{15,}'
    const tooltipUppercaseElement = document.getElementById(
      'uppercase'
    ) as HTMLDataListElement
    const tooltipLowercaseElement = document.getElementById(
      'lowercase'
    ) as HTMLDataListElement
    const tooltipSymbolElement = document.getElementById(
      'symbol'
    ) as HTMLDataListElement
    const tooltipAtleastElement = document.getElementById(
      'atleast'
    ) as HTMLDataListElement
    const linearProgressModerateElement = document.getElementById(
      'linear-progress-moderate'
    ) as HTMLDataListElement
    const linearProgressSuccessElement = document.getElementById(
      'linear-progress-success'
    ) as HTMLDataListElement
    const passwordBoxElement = document.getElementById(
      'password-box'
    ) as HTMLButtonElement
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      passwordBoxElement.className = 'input-wrapper success'
    } else {
      passwordBoxElement.className = 'input-wrapper'
    }
    const tooltipFullfilledRightClickGreen = 'tooltipList-item fulfilled'
    const tooltipUnfullfilledRightClickGray = 'tooltipList-item'
    if ((e.target as HTMLInputElement).value.match(uppercaseVariable)) {
      tooltipUppercaseElement.className = tooltipFullfilledRightClickGreen
    } else {
      tooltipUppercaseElement.className = tooltipUnfullfilledRightClickGray
    }
    if ((e.target as HTMLInputElement).value.match(lowercaseVariable)) {
      tooltipLowercaseElement.className = tooltipFullfilledRightClickGreen
    } else {
      tooltipLowercaseElement.className = tooltipUnfullfilledRightClickGray
    }
    if ((e.target as HTMLInputElement).value.match(symbolVariable)) {
      tooltipSymbolElement.className = tooltipFullfilledRightClickGreen
    } else {
      tooltipSymbolElement.className = tooltipUnfullfilledRightClickGray
    }
    if ((e.target as HTMLInputElement).value.match(atleastVariable)) {
      tooltipAtleastElement.className = tooltipFullfilledRightClickGreen
      linearProgressModerateElement.style.display = 'block'
    } else {
      tooltipAtleastElement.className = tooltipUnfullfilledRightClickGray
      linearProgressModerateElement.style.display = 'none'
    }
    if ((e.target as HTMLInputElement).value.match(atleastFifteenVariable)) {
      linearProgressModerateElement.style.display = 'none'
      linearProgressSuccessElement.style.display = 'block'
    } else {
      linearProgressModerateElement.style.display = 'block'
      linearProgressSuccessElement.style.display = 'none'
    }
  }

  const handleConfirmPasswordChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setConfirmPassword((e.target as HTMLInputElement).value)
    const confirmPasswordpatternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}" //uppercase lowercase symbol and number
      const atleastVariable = '.{3,}'
    const submitButtonElement = document.getElementById(
      'btn-enable-style'
    ) as HTMLButtonElement
    const confirmpasswordBoxElement = document.getElementById(
      'confirm-password-box'
    ) as HTMLElement
    const matchBothPasswordElement = document.getElementById(
      'match-both-password-error'
    ) as HTMLParagraphElement
    if (
      (e.target as HTMLInputElement).value.match(confirmPasswordpatternVariable)
    ) {
      confirmpasswordBoxElement.className =
        'input-wrapper password-checkHide success'
    } else {
      confirmpasswordBoxElement.className = 'input-wrapper password-checkHide'
    }
    if ((e.target as HTMLInputElement).value.match(atleastVariable)) {
      matchBothPasswordElement.style.display = 'block'
      // matchBothPasswordElement.style.color = 'green'

    } else {
      matchBothPasswordElement.style.display = 'none'
    }
  }

  const tooltipCloseFunction = () => {
    const tooltipMainBoxElement = document.getElementById(
      'tooltip-main-box'
    ) as HTMLDataListElement
    tooltipMainBoxElement.style.display = 'none'
  }

  return (
    <Box className="account__screen">
      {/* ACCOUNT SCREEN BANNER START*/}
      <BannerBg />
      {/* ACCOUNT SCREEN BANNER END */}
      {/* ACCOUNT SCREEN ANIMATION START */}
      <BackgroundBox />
      {/* ACCOUNT SCREEN ANIMATION END */}
      {/* ACCOUNT FORM START */}
      <Box
        sx={{ flexGrow: 1 }}
        id="login-form"
        className="account__form login-form"
      >
        <div className="form__inner">
          <Box sx={{ width: 1 }} className="account__form__header">
            <h3 className="title">{t<string>('setPassword')}</h3>
            <p className="sub__title">{t<string>('generatePassword')}</p>
          </Box>
          <Box sx={{ width: 1 }} className="account__form__error">
            <p className="error__msg">{message && message}</p>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="account__form__body">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
              <FormGroup>
                <FormControl
                  className="input-wrapper"
                  id="password-box"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    position: 'relative',
                    width: 1,
                    margin: '20px 0px',
                  }}
                >
                  <InputLabel htmlFor="username" className="label__icon">
                    <LockOpenIcon id="unlock-icon" />
                  </InputLabel>
                  <TextField
                    required
                    id="password"
                    label={t<string>('password')}
                    variant="standard"
                    sx={{ width: 1 }}
                    // name="password"
                    type="password"
                    inputProps={{
                      'data-testid': 'password-element',
                      autoComplete: 'off',
                    }}
                    value={password}
                    onInput={handlePasswordChange}
                    {...register('password')}
                  />
                  {/* Tooltip start */}
                  <div id="tooltip-main-box" className="tooltipCustom">
                    <button
                      onClick={tooltipCloseFunction}
                      id="tooltip-close"
                      type="button"
                      className="tooltipClose"
                    >
                      {' '}
                      <CloseIcon />
                    </button>
                    <div className="tooltipContent">
                      <p className="tooltipTitle">Password must have</p>
                      <ul className="tooltioList">
                        <li id="uppercase" className="tooltipList-item">
                          <span className="tooltip-icon">
                            <CheckIcon />
                          </span>
                          <span className="tooltip-text">Upper</span>
                        </li>
                        <li id="lowercase" className="tooltipList-item">
                          <span className="tooltip-icon">
                            <CheckIcon />
                          </span>
                          <span className="tooltip-text">Lower Case</span>
                        </li>
                        <li id="symbol" className="tooltipList-item">
                          <span className="tooltip-icon">
                            <CheckIcon />
                          </span>
                          <span className="tooltip-text">A Symbol (@#&)</span>
                        </li>
                        <li id="atleast" className="tooltipList-item">
                          <span className="tooltip-icon">
                            <CheckIcon />
                          </span>
                          <span className="tooltip-text">
                            At least 8 characters
                          </span>
                        </li>
                      </ul>
                      <Box sx={{ width: '100%', mr: 1 }}>
                        <p className="tooltipTitle StrengthTitle">
                          Password Strength :{' '}
                          <span style={{ color: '#ed6c02' }}></span>
                        </p>
                        <LinearProgress
                          id="linear-progress-moderate"
                          variant="determinate"
                          color="warning"
                          value={50}
                        />
                        <LinearProgress
                          id="linear-progress-success"
                          variant="determinate"
                          color="success"
                          value={100}
                        />
                      </Box>
                    </div>
                  </div>
                  {/* Tooltip end */}
                </FormControl>
                <p className="text-error">{errors.password?.message}</p>
                <FormControl
                  className="input-wrapper password-checkHide"
                  id="confirm-password-box"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    position: 'relative',
                    width: 1,
                    margin: '20px 0px',
                  }}
                >
                  <InputLabel htmlFor="confirmPassword" className="label__icon">
                    <LockOpenIcon id="unlock-icon" />
                  </InputLabel>
                  <TextField
                    required
                    id="confirmPassword"
                    label={t<string>('confirmPassword')}
                    variant="standard"
                    sx={{ width: 1 }}
                    type={values.showPassword ? 'text' : 'password'}
                    autoComplete="false"
                    inputProps={{ 'data-testid': 'confirm-password-element' }}
                    value={confirmPassword}
                    onInput={handleConfirmPasswordChange}
                    {...register('confirmPassword')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            className="password-toggle"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <p className="text-error">{errors.confirmPassword?.message}</p>
                <p id="match-both-password-error" className={(password !== confirmPassword)?"text-error":"text-error-success"}>
                  {password !== confirmPassword ? 'Both passwords must matched' : 'password and confirm password matched'}
                </p>
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
                    variant="contained"
                    id="btn-enable-style"
                    data-testid="button-element"
                    type="submit"
                    name="submit"
                    className={(password.length> 0 && confirmPassword.length>0)?((password !== confirmPassword)?"customBtn-01":"customBtn-01 btn-enable-style"):"customBtn-01"}
                  >
                    {t<string>('done')}
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

export default SetPassword
