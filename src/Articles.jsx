import React from 'react'
import { Link } from 'react-router-dom'

function Articles() {
  return (
    <div className='container links-utiles py-10'>
      <div className='shadow'>
        <div className='orange-bg rounded-t-2xl w-[670px] flex justify-center content-center'>
          <h2 className='text-slate-800 font-semibold py-4 text-3xl '>Links Útiles</h2>
        </div>
        <div className='w-[670px] bg-sky-900 rounded-b-2xl'>
          <div className='grid grid-cols-3 gap-5 p-5'>
            <a href="https://wa.me/message/AAFE4WMBK4PUK1">
            <div className=''>
              <div className='flex justify-center'>
                <img className="self-center" src="/assets/links/criptobroker.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Broker P2P</div>
            </div>
            </a>
            <a href="">
              <div className='http://instagram.com/tienda.cripto'>
              <div className='flex justify-center'>
                <img src="/assets/links/tienda.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Tienda Cripto</div>
            </div>
            </a>
            <a href="https://www.bybit.com/en-US/register?affiliate_id=24030&language=en-US&group_id=0&group_type=1">
              <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/coinbox.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>CoinboxMining</div>
            </div>
            </a>
            <a href="">
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/renta.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Renta Fija</div>
            </div>
            </a>
            <a href="">
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/trading.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Trading</div>
            </div>
            </a>
            <a href="https://satgo.co/CriptoNorber">
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/exchange.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Exchange</div>
            </div>
          </a></
          div>
        </div>
      </div>
    </div>
  )
}

export default Articles