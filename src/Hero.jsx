import React from 'react'

export default function Hero() {
  return (
    <div className='w-100 h-100 darkblue-bg'>
      <div className='container flex gap-4 py-20'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-orange-400 font-semibold text-2xl pb-3'>¡Aprendamos juntos!</h1>
          <p className='text-hero'>Comparto mi conocimiento en cripto en redes sociales para toda mi comunidad, te recomiendo que me sigas para estar enterado de todo lo que pasa en el mundo de blockchain y criptomonedas</p>
          <div className='container-botones'>
            <button className='btn-hero'>
              <span>Informate</span>
              </button>
            <button className='btn-hero'>
              <span>Aprendé</span>
            </button>
          </div>
        </div>
        <div>
          <iframe className='shadow' width="560" height="315" src="https://www.youtube.com/embed/KEdNtmzDROw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}