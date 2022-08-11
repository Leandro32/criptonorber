import React from 'react'
import Card from './Card'

function CardsCryptoPrices({coins}) {
  
  console.log("props CardsCryptoPrices",coins)

  return (
    <div className='flex orange-bg py-3'>
      {coins.map(coin => (
        <Card 
          name={coin.name}
          price_change_percentage_24h={coin.price_change_percentage_24h}
          symbol={coin.symbol}
          price={coin.current_price}
          image={coin.image}
        />
      ))}
    </div>
  )
}

export default CardsCryptoPrices