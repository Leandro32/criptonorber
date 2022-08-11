import './styles/globals.css'
import Hero from './Hero'
import CardsCryptoPrices from './Cards/CardsCryptoPrices'
import About from './About'
import Articles from './Articles'
import PortalNoticias from './PortalNoticias'
import Links from './Links'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
  var url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Csolana%2Ccardano%2Cbinancecoin&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"

  const [coins, setCoins] = useState([])

  const getData = async () => {
    const res = await axios.get(url)
    console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  },[])

  return <>
      <Hero/>
      <CardsCryptoPrices coins={coins}/>
      <About/>
      <Links/>
    </>
}
