import React from 'react'
import Infobae from './portales/Infobae'
import Iproup from './portales/Iproup'
import Cripto247 from './portales/Cripto247'
import CriptoNews from './portales/CryptoNews'
import Accenture from './portales/Accenture'
import Noticiasvarias from './portales/Noticiasvarias'

function PortalNoticias() {
  return (
    <div className='grid place-items-center'>
      <Infobae/>
      <Iproup/>
      <Cripto247/>
      <CriptoNews/>
      <Accenture/>
      <Noticiasvarias/>
    </div>
  )
}

export default PortalNoticias
