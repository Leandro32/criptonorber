import React from 'react'

export default function Crypto247() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/cripto247.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Cripto 247</h2>
        </div>
        <a href='https://www.cripto247.com/comunidad-cripto/para-el-director-de-soluciones-de-accenture-argentina-hay-que-ser-agnostico-con-la-tecnologia-180340'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Blockchain atravesando las industrias - Diciembre '18</p>
          </div>
        </a>
        <a href='https://www.cripto247.com/comunidad-cripto/conversamos-con-norberto-p-giudice-criptonorber-elegido-referente-cripto-de-la-region-por-nuestros-lectores-209279'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Referente Cripto de la región - Diciembre '21</p>
          </div>
        </a>
      </div>
    </div>
  )
}
