import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../../assets/images/svg/404.svg'
import useLocales from '../../hooks/useLocales'

const Notfound = () => {
  const { t } = useLocales()
  return (
    <section className="notFound-wrapper">
      <div className="wrapper-inner">
        <img
          className="notfound-svg"
          src={NotFound}
          alt="404 - Page Not Found"
        />
        <div className="inner-content">
          <h1>{t<string>('pageNotFound')}</h1>
          <Link to="/">{t<string>('home')}</Link>
        </div>
      </div>
    </section>
  )
}

export default Notfound
