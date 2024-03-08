import React from 'react'
import landingImage from '../assets/landing.png'

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-white" id="home">
      <div className="absolute inset-0 h-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${landingImage})`}}></div>
      </div>
      <div className="text-center z-10 mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-white leading-0">СУ "Никола Й. Вапцаров"</h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8">гр. Айтос</p>
        <a className='px-4 md:px-6 py-2 md:py-3 text-base md:text-lg lg:text-xl bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-300' href='#istoriq'>Моето училище</a>
      </div>
    </div>
  )
}

export default Hero