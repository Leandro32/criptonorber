import React from 'react'

export default function Iproup() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/iproup.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>iPro Up</h2>
        </div>
        <a href='https://www.iproup.com/economia-digital/25463-esta-cripto-tapada-le-da-pelea-el-liderazgo-de-bitcoin'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>¿Que es Cardano? - Agosto '21</p>
          </div>
        </a>
      </div>
    </div>
  )
}
