import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        {
            id: 1,
            text: 'Начало',
            href: '#home'
        },
        {
            id: 2,
            text: 'Представителни отбори',
            href: '#otbori'
        },
        {
            id: 3,
            text: 'История',
            href: '#istoriq'
        },
    ];


    return (
        <div className='w-full h-24 bg-white fixed z-[100] py-2'>
            <div className='max-w-[1240px] mx-auto flex flex-row justify-between items-center px-4'>
                {/* Vaptsarov Logo / Navbar Logo */}
                <img src={logo} alt="" className='w-[64px]' />
                {/* Екран (Desktop) */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <a href={item.href} key={item.id} className="block">
                            <li className='p-4 hover:bg-blueVap rounded-xl m-2 cursor-pointer duration-300 hover:text-white'>
                                {item.text}
                            </li>
                        </a>
                    ))}
                </ul>
                {/* Burger menu / Отвярящо - затварящо меню за телефон */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={ nav ? 'z-[999] text-center fixed md:hidden left-0 top-0 w-[60%] h-full border-r white bg-white ease-in-out duration-500 items-center flex flex-col gap-20' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
                    {/* Vaptsarov Logo / Navbar Logo */}
                    <img src={logo} alt="" className='w-[128px] mx-auto mt-[120px]' />
                    <div className='flex flex-col gap-5 w-full'>
                    {navItems.map(item => (
                        <a href={item.href} className="block border-b border-t hover:bg-blueVap hover:text-white duration-300 ease-in-out">
                            <li className='p-4 cursor-pointer'>
                                {item.text}
                            </li>
                        </a>
                    ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar