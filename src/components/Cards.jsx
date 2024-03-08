import React from 'react'
import majoretki from '../assets/majoretki.png'
import ogneborci from '../assets/ogneborci.png'
import morqci from '../assets/morqci.png'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <div className='w-full min-h-fit bg-white pt-20 text-black' id="otbori">
            <div className='max-w-[1240px] h-full mx-auto flex flex-col justify-center  items-center gap-[120px]'>
                <h1 className='md:text-7xl text-4xl text-blueVap font-bold'>Представителни отбори</h1>
                <div className='flex flex-row flex-wrap mx-auto gap-10 md:gap-20 justify-center items-center'>
                    {/* Карта мажоретки */}
                    <div className='w-[320px] h-[500px] bg-white text-black flex flex-col gap-0 border border-blueVap rounded-lg duration-300 ease-in-out hover:mt-[-50px] hover:bg-blueVap hover:text-white'>
                        <div>
                            <img src={majoretki} alt="" className=' rounded-t-lg'/>
                        </div>
                        <div className='p-4 flex flex-col justify-between gap-2'>
                            <h1 className='text-4xl'>Мажоретки</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est hic velit ex aliquam repellat tempore doloremque ipsam dolor sequi voluptates quidem ullam sint, commodi eum. Sequi beatae accusantium officia eum.</p>
                            <Link className="underline bold" to="/majoretki">
                                Разгледай още
                            </Link>
                        </div>
                    </div>
                    {/* Карта огнеборци */}
                    <div className='w-[320px] h-[500px] bg-white text-black flex flex-col gap-0 border border-blueVap rounded-lg duration-300 ease-in-out hover:mt-[-50px] hover:bg-blueVap hover:text-white'>
                        <div>
                            <img src={ogneborci} alt="" className='h-[215px] w-full rounded-t-lg'/>
                        </div>
                        <div className='p-4 flex flex-col justify-between gap-2'>
                            <h1 className='text-4xl'>Огнеборци</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est hic velit ex aliquam repellat tempore doloremque ipsam dolor sequi voluptates quidem ullam sint, commodi eum. Sequi beatae accusantium officia eum.</p>
                            <Link className="underline bold" to="/ogneborci">
                                Разгледай още
                            </Link>
                        </div>
                    </div>
                    {/* Карта моряци */}
                    <div className='w-[320px] h-[500px] bg-white text-black flex flex-col gap-0 border border-blueVap rounded-lg duration-300 ease-in-out hover:mt-[-50px] hover:bg-blueVap hover:text-white'>
                        <div>
                            <img src={morqci} alt="" className=' rounded-t-lg'/>
                        </div>
                        <div className='p-4 flex flex-col justify-between gap-2'>
                            <h1 className='text-4xl'>Моряци</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est hic velit ex aliquam repellat tempore doloremque ipsam dolor sequi voluptates quidem ullam sint, commodi eum. Sequi beatae accusantium officia eum.</p>
                            <Link className="underline bold" to="/morqci">
                                Разгледай още
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards