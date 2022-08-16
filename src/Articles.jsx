import React from 'react'
import { Link } from 'react-router-dom'

function Articles() {
  return (
    <div className='container links-utiles py-10'>
      <div className='shadow'>
        <div className='orange-bg rounded-t-2xl articles-width flex justify-center content-center'>
          <h2 className='text-slate-800 font-semibold py-4 text-3xl '>Links Útiles</h2>
        </div>
        <div className='articles-width bg-sky-900 rounded-b-2xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 grid-rsp'>
            <a href="https://wa.me/message/AAFE4WMBK4PUK1">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/criptobroker.png" />
                </div>
                <div className='text-center pt-3 text-white font-medium'>Broker P2P</div>
              </div>
            </a>
            <a href="http://instagram.com/tienda.cripto">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/tienda.png" />
                </div>
                <div className='text-center pt-3 text-white font-medium'>
                  Tienda Cripto
                </div>
              </div>
            </a>
            <a href="https://www.bybit.com/en-US/register?affiliate_id=24030&language=en-US&group_id=0&group_type=1">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/coinbox.png" />
                </div>
                <div className='text-center pt-3 text-white font-medium'>CoinboxMining</div>
              </div>
            </a>
            <a href="https://partner.bingbon.com/CriptoNorber">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/bingx.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>BingX Trading</div>
              </div>
            </a>
            <a href="https://accounts.binance.com/en/register?ref=MK3Y9RQ4">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/binance.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>Binance</div>
              </div>
            </a>
            <a href="https://www.bybit.com/en-US/register?affiliate_id=24030&language=en-US&group_id=0&group_type=1">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/bybit.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>ByBit</div>
              </div>
            </a>
            <a href="https://crypto.com/app/nem6ru52gr">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/cryptocom.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>Crypto.com</div>
              </div>
            </a>
            <a href="https://nexo.io/ref/lwej5whxi3?src=web-link">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/nexo.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>Nexo</div>
              </div>
            </a>
            <a href="https://satgo.co/CriptoNorber">
              <div className=''>
                <div className='img-container flex justify-center'>
                  <img src="/assets/links/satoshi.png"></img>
                </div>
                <div className='text-center pt-3 text-white font-medium'>Satoshi Tango</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles