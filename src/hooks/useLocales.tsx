import { useTranslation } from 'react-i18next'

type LangType = [
  {
    value: any
    label: any
  },
  {
    value: any
    label: any
  }
]

const LANGS: LangType = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'de',
    label: 'German',
  },
]

export default function useLocales() {
  const { i18n, t } = useTranslation()
  const langStorage = localStorage.getItem('i18nextLng')
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage)

  const handleChangeLanguage = (newlang: any) => {
    i18n.changeLanguage(newlang)
  }

  return {
    onChangeLang: handleChangeLanguage,
    t,
    currentLang,
    allLang: LANGS,
  }
}
