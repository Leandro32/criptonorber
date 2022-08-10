import React from 'react'

export default function Ambito() {
  return (
    <div className='portal-texto w-6/12 grid grid-cols-2 justify-center mt-5'>
      <div className='w-fit'>
        <img src="/assets/links/trading.png"/>
      </div>
      <div className='portal-noticias'>
        <div className='h-40 flex flex-col justify-center'>
          <h2 className='portal'>Trading</h2>
        </div>
        <a href='https://partner.bingbon.com/CriptoNorber'>
          <div className='flex portal-noticia my-2'>
            <img className='mr-2' src="/assets/links/bingx.png" width="25px" height="30px"></img>
            <p>BingX Trading</p>
          </div>
        </a>
      <a href='https://accounts.binance.com/en/register?ref=MK3Y9RQ4'>
        <div className='flex portal-noticia my-2'>
          <img className='mr-2' src="/assets/links/binance.png" width="25px" height="30px"></img>
          <p>Binance</p>
        </div>
      </a>
        <a href='https://www.bybit.com/en-US/register?affiliate_id=24030&language=en-US&group_id=0&group_type=1'>
        <div className='flex portal-noticia my-2'>
          <img className='mr-2' src="/assets/links/bybit.png" width="25px" height="30px"></img>
          <p>ByBit</p>
        </div>
      </a>
      </div>
    </div>
  )
}
