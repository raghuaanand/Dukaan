import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { menuLinks } from '../constants/MenuLink';

const Navbar = () => {
  return (
    <div className='bg-[#1e2640] w-[224px] h-[100%] p-[16px]'>
      
      {/* logo section */}

      <div className='flex items-center gap-[12px]'>
        <img src='src/assets/logo.png' alt='logo' className='w-[39px] h-[39px]'/>
        <div className=''>
            <p className='text-white text-[15px] font-inter font-medium '>Nishyan</p>
            <a href='#' className='text-white text-[13px] underline'>Visit Store</a>
        </div>
        <IoIosArrowDown className='text-white w-[20px] h-[20px]'/>
      </div>

      {/* menu of the navbar */}

      <ul className='mt-[24px]'>
        {menuLinks.map((menu, index) => (
            <li className='text-white flex items-center gap-[12px] p-[8px]' key = {menu.id}>
                <img src = {menu.logo} alt='logo' className='h-[20px] w-[20px] opacity-80 flex-shrink-0'/>
                <p>{menu.title}</p>
            </li>
        ))}
      </ul>

      <div className='flex'>
        <img src='src/assets/wallet.svg' alt='wallet' className='w-[24px] h-[24px] p-6 bg-[#353c53] rounded-lg opacity-80'/>
        <div>
          <p className='text-white'>Available credits</p>
          <p className='text-white'>222.10</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
