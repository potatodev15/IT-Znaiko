import React from 'react'
import image from '../assets/history.png'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div className='w-full h-fit flex flex-col items-center justify-center mt-10 mb-10' id="istoriq">
      <div className='max-w-[1240px] pt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='font-roboto tracking-tighter font-bold text-4xl md:text-5xl md:text-left text-center text-blueVap'>История на <span className='font-pacifico'>моето училище</span></h1>
          <p><span className='font-pacifico text-blueVap'>СУ "Никола Й. Вапцаров"</span> отваря за пръв път врати през 1983г. - (отваряне на училището за първа учебна година)</p>
          <Link to="/istoriq" className='mx-auto md:mx-0 p-4 mb-4 bg-blueVap w-[30%] flex flex-col items-center text-center text-white  rounded-lg'>
            Разгледай още
          </Link> 
        </div>
        {/* Image */}
        <img src={image} alt="/" />
      </div>
    </div>
  )
}

export default History