import React from 'react'
import Trading from './links/Trading'
import RentaFija from './links/RentaFija'
import Exchange from './links/Exchange'

export default function Links() {
  return (
    <div className='grid place-items-center'>
      <Trading/>
      <RentaFija/>
      <Exchange/>
    </div>
  )
}
