import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaRupeeSign } from 'react-icons/fa';

const Frame = () => {
  return (
    <div className=''>
      <div className='flex justify-between'>
        <p className='text-[20px] font-medium font-inter'>Overview</p>

        <div className='flex items-center justify-center gap-[6px] w-[137px] h-[36px] bg-[#fff] border-[1px] rounded-lg'>
            <p className='text-[16px] font-medium'>Last Month</p>
            <IoIosArrowDown />
        </div>
      </div>


      {/* stats */}

      <div className='flex gap-[20px] mt-[24px]'>

        <div className='bg-white p-[20px] w-1/2 rounded-lg'>
            <p className='text-[16px] font-normal'>Online orders</p>
            <p className='text-[32px] font-medium font-inter'>231</p>
        </div>

        <div className='bg-white p-[20px] w-1/2 rounded-lg'>
            <p className='text-[16px] font-normal'>Amount received</p>
            <div className='flex items-center'>
                <p className='text-[32px] font-medium font-inter'>₹ 23,92,312.19</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frame
