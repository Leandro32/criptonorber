import React from 'react'

export default function Noticiasvarias() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/NoticiasVarias.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Otros Portales</h2>
        </div>
        <a href='https://diariosanrafael.com.ar/el-bitcoin-puede-bajar-la-inflacion-que-dicen-los-expertos-en-criptomonedas-sobre-la-idea-de-alberto-fernandez/'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Bitcoin puede bajar la inflación - Diario San Rafael - Agosto '21</p>
          </div>
        </a>
        <a href='https://enqueinvertir.com/noticias/2021/08/20/que-criptomonedas-comprar-y-donde-guardarlas-descentralizar-2021-te-cuenta/'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Qué criptomonedas comprar y dónde guardarlas - EnQueInvertir - Agosto '21</p>
          </div>
        </a>
        <a href='https://www.criptonoticias.com/comunidad/descentralizar-dinero-mineria-criptomonedas-ocuparon-agenda-primer-dia/'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>Descentralizar: dinero, minería y criptomonedas - CriptoNoticias - Agosto '21</p>
          </div>
        </a>
      </div>
    </div>
  )
}
