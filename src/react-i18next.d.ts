import 'react-i18next'
import en from '../src/locales/translations/en.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: typeof en
  }
}
