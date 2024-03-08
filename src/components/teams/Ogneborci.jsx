import React from 'react'
import landingImage from '../../assets/ogneborci.png'
import { Link } from 'react-router-dom'

const Ogneborci = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='max-w-[1240px] pt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='tracking-tighter font-bold text-4xl md:text-7xl md:text-left text-center text-orange-400'><span className='font-pacifico'>Огнеборци</span></h1>
          <p>Отбора на огнеборците се състой от две възрастови групи и участват в всички национални състезания, като печелят пирзови места</p>
          <Link to="/" className='p-4 bg-orange-400 w-[50%] flex flex-col items-center text-center text-white  rounded-lg'>
            Въренете се обратно в началото
          </Link> 
        </div>
        {/* Image */}
        <img src={landingImage} alt="/" />
      </div>
    </div>
  )
}

export default Ogneborci