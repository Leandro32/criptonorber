import React from 'react'

export default function RentaFija() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/links/Renta.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Renta Fija</h2>
        </div>
        <a href='https://crypto.com/app/nem6ru52gr'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/links/cryptocom.png" width="25px" height="30px"></img>
            <p>Crypto.com</p>
          </div>
        </a>
        <a href='https://nexo.io/ref/lwej5whxi3?src=web-link'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/links/nexo.png" width="25px" height="30px"></img>
            <p>Nexo</p>
          </div>
        </a>
      </div>
    </div>
  )
}
