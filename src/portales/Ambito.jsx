import React from 'react'

export default function Ambito() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/Ambito.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Ámbito Financiero</h2>
        </div>
        <a href='https://www.ambito.com/finanzas/bitcoin/mineria-y-consumo-energetico-ejes-centrales-la-nueva-edicion-descentralizar-2021-n5255985'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Evento DescentralizarAR 2021 - Agosto '21</p>
          </div>
        </a>
      </div>
    </div>
  )
}
