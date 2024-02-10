import React from 'react'
import {BsCart} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
export const Nav = () => {
  return (
    <div className='fixed w-full py-4 z-[200] '>
        <div className='max-w-7xl mx-auto px-5 flex text-white justify-between items-center'>
            <h1 className='text-xl font-bold tracking-wider  font-[rowdies]'>Horizon Wings</h1>
            <ul className='hidden md:flex items-center space-x-5 text-xl'>
                <li className='hover:text-[#219AB3] cursor-pointer'>Home</li>
                <li className='hover:text-[#219AB3] cursor-pointer'>Features</li>
                <li className='hover:text-[#219AB3] cursor-pointer'>Pricing</li>
                <li className='hover:text-[#219AB3] cursor-pointer'>Mission</li>
             
            </ul>
            <div className='hidden md:flex items-center space-x-4'>
                <BsCart className='text-2xl'/>
                <button className='bg-white text-black rounded-full px-5 py-2'>Order Now</button>
            </div>
            <GiHamburgerMenu className='cursor-pointer md:hidden text-3xl'/>
        </div>
    </div>
  )
}
