import React from 'react'
import { Link } from 'react-router-dom'

export default function MaterialNotasHome() {
  return (
    <>
      <div className='flex flex-wrap justify-center mt-5 pb-5 grid-cols-2'>
        <Link className='mt-5' to="/notas">
          <div className='px-4'>
            <div className='flex justify-center'>
              <img className='img-btn' src="/assets/links/notas.png"></img>
            </div>
            <div className='text-center pt-3 text-black font-medium'>Notas Periodísticas</div>
          </div>
        </Link>
        <Link className='mt-5' to="/material">
          <div className='px-4'>
            <div className='flex justify-center'>
              <img className='img-btn' src="/assets/links/libros.png"></img>
            </div>
            <div className='text-center pt-3 text-black font-medium'>Material educativo</div>
          </div>
        </Link>
      </div>
    </>
  )
}
