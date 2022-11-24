import Background from '../../../assets/images/login-bg.jpg'
import { typeVar } from '../../../utils/constants'

const BannerBg = ({ page = 'login' }) => {
  if (page === 'login') {
    return (
      <picture>
        {' '}
        <source srcSet={Background} type={typeVar.IMAGE_WEBP} />{' '}
        <source srcSet={Background} type={typeVar.IMAGE_PNG} />{' '}
        <img src={Background} className="account__screen__banner" alt="" />{' '}
      </picture>
    )
  } else {
    return (
      <picture>
        {' '}
        <source srcSet={Background} type="image/webp" />{' '}
        <source srcSet={Background} type="image/png" />{' '}
        <img src={Background} className="account__screen__banner" alt="" />{' '}
      </picture>
    )
  }
}

export default BannerBg
