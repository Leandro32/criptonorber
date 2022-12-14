import React from 'react'
import { SocialIcon } from 'react-social-icons'


function Footer() {
  return (
    <>
    <div className="bg-degrade h-10 mt-5"></div>
    <div className='flex flex-wrap justify-around blue-bg footer'>
      <div className='footer-logo my-5'>
        <img src="/assets/logo white.png" alt="CriptoNorber logo" />
      </div>
      <div className='flex items-center justify-center my-5 gap-2'>
        <SocialIcon url="https://youtube.com/c/CriptoNorber" className='social-icon' fgColor='rgb(235, 235, 235)'/>
        <SocialIcon url="https://www.instagram.com/criptonorber/" className='social-icon' fgColor='rgb(235, 235, 235)'/>
        <SocialIcon url="https://t.me/criptonorberok" className='social-icon' fgColor='rgb(235, 235, 235)'/>
        <SocialIcon url="https://www.linkedin.com/in/npgiudice/" className='social-icon' fgColor='rgb(235, 235, 235)'/>
        <SocialIcon url="https://www.twitch.tv/criptonorber" className='social-icon' fgColor='rgb(235, 235, 235)'/>
        <SocialIcon url="https://twitter.com/npgiudice" className='social-icon' fgColor='rgb(235, 235, 235)'/> 
      </div>
    </div>
    </>
  )
}

export default Footer