import React from 'react'
import useLocales from '../../hooks/useLocales'

const Loading = () => {
  const { t } = useLocales()
  //we will provide a spinner over here, at present for showing purpose we kept loading word only
  return (
    <div>
      <h1>{t<string>('loading')}</h1>
    </div>
  )
}

export default Loading
