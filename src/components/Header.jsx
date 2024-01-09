import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";



const Header = () => {
  return (
    <>
        <div className='flex justify-between  h-[72px] py-[12px] items-center border-b-2 px-[32px]'>
            <div className='flex'>

                <p className='pr-[16px] font-inter font-normal text-[15px]'>Payments</p>
                <div className='flex gap-[6px] items-center'>
                    <CiCircleQuestion className='w-[14px] h-[14px]'/>
                    <p className='text-[12px]'>How it works</p>
                </div>
            </div>

            <div className='w-[400px] py-[9px] px-[16px] flex items-center gap-[8px] bg-[#f2f2f2] rounded-lg'>
                <FaSearch className='text-gray-500 flex-shrink-0 w-[16px] h-[16px]'/>
                <input placeholder='Search features, tutorials, etc.' className='bg-[#f2f2f2]'/>
            </div>
            <div className='flex gap-[16px]'>
                <img src='src/assets/Message.svg' alt='message' className='bg-[#e6e6e6] p-[10px] rounded-full'/>
                <img src='src/assets/DropDownMenu.svg' alt='drop down menu'/>
            </div>
        </div>
    </>
  )
}

export default Header
