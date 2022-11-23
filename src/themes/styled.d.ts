import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    textForLogin: string
    primary: string
    background: string
    font: string
    border: string
    label: string
    successBorder: string
    opacity: string
  }
}
