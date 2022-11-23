import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff !important',
  text: '#121212 !important',
  textForLogin: '#858585 !important',
  primary: 'lightGreen !important',
  background: 'white !important',
  font: 'sans-serif !important',
  border: '#e8ebf3',
  label: '#abaec5',
  successBorder: '#75818a',
  opacity: '1',
}

export const darkTheme = {
  body: '#121212 !important',
  text: '#fff !important',
  textForLogin: 'white !important',
  primary:
    'linear-gradient(297deg, #F57C52 0%, #D63548 100%) 0% 0% no-repeat padding-box !important',
  background: '#092133 !important',
  font: '"Ubuntu", sans-serif !important',
  border: '#04131E',
  label: '#ffffff',
  successBorder: '#195583',
  opacity: '0.5',
}

export const GlobalStyles = createGlobalStyle<{ theme: string }>`
  body {
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.textForLogin};
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
  }
  .h1-padding{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
  .account__screen .account__form .form__inner .MuiInputBase-root::before {
    border: 1px solid ${({ theme }) => theme.border} !important;
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper .MuiFormControl-root label {
    color: ${({ theme }) => theme.label};
    opacity: ${({ theme }) => theme.opacity};
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper.success .MuiInputBase-root::before {
    border-color: ${({ theme }) => theme.successBorder} !important;
  }
  .password-toggle svg {
    color: ${({ theme }) => theme.text};
  }
  .title {
    color: ${({ theme }) => theme.text};
  }
  #login-form{
    background: ${({ theme }) => theme.background};
  }
  .homescreen-text{
    color: ${({ theme }) => theme.text};
  }
  .login-area .form-title p.sub-title {
    color: ${({ theme }) => theme.textForLogin};
  }
  #username{
    color: ${({ theme }) => theme.textForLogin};
  }
  #password{
    color: ${({ theme }) => theme.textForLogin};
  }
  #confirmPassword{
    color: ${({ theme }) => theme.textForLogin};
  }
  #mail-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #unlock-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
`
