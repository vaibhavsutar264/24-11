import useLocales from '../../hooks/useLocales'

const HomeScreen = () => {
  const { t } = useLocales()
  return (
    <>
      <div className="main-div">
        <h1 data-testid="password-exist" className="homescreen-text">
          {t<string>('home')}
        </h1>
        <div className="centering-div">
          <h1 className="h1-padding">TCL-CPAAS {t<string>('home')}</h1>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
