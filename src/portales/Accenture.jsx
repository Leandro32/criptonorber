import React from 'react'

export default function Accenture() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/Accenture.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Accenture</h2>
        </div>
        <a href='http://accenture.com/ar-es/case-studies/banking/agrotoken-stablecoin?c=acn_glb_agrotokencasestlinkedin_12827082&n=smc_0222'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Accenture & Agrotoken - Febrero '22</p>
          </div>
        </a>
      </div>
    </div>
  )
}
