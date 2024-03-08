import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../../assets/morqci.png'

const Morqci = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='max-w-[1240px] pt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='tracking-tighter font-bold text-4xl md:text-7xl md:text-left text-center text-blueVap'><span className='font-pacifico'>"Моряци"</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi amet omnis optio odio asperiores? Sint, quos blanditiis recusandae aliquam officiis assumenda quisquam quas animi tempora esse. Quia commodi numquam a!</p>
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

export default Morqci