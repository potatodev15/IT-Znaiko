import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full min-h-60 flex flex-col items-center justify-center'>
        <div className='max-w-[1240px] mx-auto flex flex-row flex-wrap justify-evenly h-full items-center'>
            <div className='flex flex-col gap-2 justify-center w-[30%]'>
                <h1 className='text-3xl'>СУ "Никола Й. Вапцаров"</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam corrupti beatae praesentium, rerum reprehenderit recusandae!</p>
            </div>
            <div className='w-[40%] flex flex-col justify-center items-center '>
                <div className='flex flex-row w-[30%] justify-between'>
                    <a href=""><FaFacebookSquare size={40}/></a>
                    <a href=""><FaYoutube size={40}/></a>
                    <a href=""><FaInstagramSquare size={40}/></a>
                </div>
                <p>Направено от: Денис Храниславов</p>
            </div>
        </div>
    </div>
  )
}

export default Footer