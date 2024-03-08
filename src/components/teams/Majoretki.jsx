import React from 'react'
import landingImage from '../../assets/majoretki.png'
import { Link } from 'react-router-dom'

const Majoretki = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='max-w-[1240px] pt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='tracking-tighter font-bold text-4xl md:text-7xl md:text-left text-center text-blueVap'>Мажоретен състав <span className='font-pacifico'>"Морски сирени"</span></h1>
          <p>Мажоретките взимат участие във всички представителни изяви на училището с ръководител: <span className='font-pacifico'>Весела Захариева, Ани Стойчева</span></p>
          <Link to="/" className='p-4 bg-blueVap w-[50%] flex flex-col items-center text-center text-white  rounded-lg'>
            Въренете се обратно в началото
          </Link> 
        </div>
        {/* Image */}
        <img src={landingImage} alt="/" />
      </div>
    </div>
  )
}

export default Majoretki