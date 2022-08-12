import React from 'react'

function Articles() {
  return (
    <div className='container links-utiles py-10'>
      <div className='shadow'>
        <div className='orange-bg rounded-t-2xl w-[670px] flex justify-center content-center'>
          <h2 className='text-slate-800 font-semibold py-4 text-3xl '>Links Útiles</h2>
        </div>
        <div className='w-[670px] bg-sky-900 rounded-b-2xl'>
          <div className='grid grid-cols-3 gap-5 p-5'>
            <div className=''>
              <div className='flex justify-center'>
                <img className="self-center" src="/assets/links/criptobroker.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Broker P2P</div>
            </div>
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/tienda.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Tienda Cripto</div>
            </div>
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/coinbox.png"/>
              </div>
              <div className='text-center pt-3 text-white font-medium'>CoinboxMining</div>
            </div>
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/renta.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Renta Fija</div>
            </div>
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/trading.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Trading</div>
            </div>
            <div className=''>
              <div className='flex justify-center'>
                <img src="/assets/links/exchange.png"></img>
              </div>
              <div className='text-center pt-3 text-white font-medium'>Exchange</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles