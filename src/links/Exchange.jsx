import React from 'react'

export default function Exchange() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/links/exchange.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Exchange</h2>
        </div>
        <a href='https://satgo.co/CriptoNorber'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/links/satoshi.png" width="25px" height="30px"></img>
            <p>Satoshi Tango</p>
          </div>
        </a>
      </div>
    </div>
  )
}
