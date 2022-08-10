import React from 'react'


function Card({ name, price_change_percentage_24h, symbol, price,image}) {
  console.log(name, price_change_percentage_24h, symbol, price, image)
  return (
    <div className='bg-slate-50 rounded-2xl crypto-card flex border-slate-200'>
      <div className='card-img'>
        <img
          src={image}
          alt={name}
          />
      </div>
      <div className='flex flex-col justify-around grow'>
        <h3>{symbol.toUpperCase()}</h3>
        <span className='text-slate-600'>${price}</span>
      </div>
      <div className='flex flex-col justify-around grow'>
        <span></span>
        <span className={price_change_percentage_24h > 0 ? 'positivo' : 'negativo'}>% {price_change_percentage_24h.toPrecision(2)}</span>
      </div>
    </div>
  )
}

export default Card