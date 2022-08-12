import React from 'react'
import { Link } from 'react-router-dom'


function Card({ name, price_change_percentage_24h, symbol, price,image}) {
  console.log(name, price_change_percentage_24h, symbol, price, image)
  return (
    <Link to="" className="bg-slate-50 rounded-2xl crypto-card flex border-slate-200">
        <div className='card-img'>
          <img
            src={image}
            alt={name}
            />
        </div>
        <div className='flex flex-col justify-center grow'>
          <h3 className='text-base '>{symbol.toUpperCase()}</h3>
          <span className='text-slate-600'>${price}</span>
        </div>
        <div className='flex flex-col justify-center grow'>
          <span className={price_change_percentage_24h > 0 ? 'positivo' : 'negativo'}>% {price_change_percentage_24h.toPrecision(2)}</span>
        </div>
    </Link>
  )
}

export default Card