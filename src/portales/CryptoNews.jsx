import React from 'react'

export default function CryptoNews() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/articles/CriptoNews.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Cryptonews</h2>
        </div>
        <a href='https://es.cryptonews.com/noticias/entrevista-a-criptonorber-influencer-argentino.htm'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/newspaper.svg" width="25px" height="30px"></img>
            <p>El Dip - Julio '22</p>
          </div>
        </a>
      </div>
    </div>
  )
}
