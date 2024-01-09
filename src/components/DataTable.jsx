import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { orderLink } from '../constants/OrderLinks';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const DataTable = () => {
  return (
    <div className='mt-[32px] '>
      <p className='text-[20px] font-medium'>Transaction | This Month</p>

      <div className=' bg-white rounded-lg px-[12px] py-[24px] mt-[20px]'>

        <div className='flex justify-between'>
            <div className='flex items-center w-[248px] px-[16px] py-[10px] gap-[6px] border-[1px] rounded-lg'>
                <FaSearch className='text-gray-500'/>
                <input placeholder='Search by Order ID'/>
            </div>

            <div className='flex gap-[12px]'>

                <div className='flex items-center justify-center border-[1px] rounded-lg gap-[6px] py-[6px] px-[12px] '>
                    <p className='text-[16px] font-inter'>Sort</p>
                    <img src='src/assets/Sort.svg' alt='sort' className='w-[16px] h-[16px]'/>
                </div>

                <div className='w-[36px] h-[36px] border-[1px] rounded-lg flex items-center justify-center'>
                    <img src='src/assets/download.png' alt='download' className='w-[20px] h-[20px]'/>
                </div>
            </div>
        </div>


        <div className='bg-[#f2f2f2] flex items-center px-[12px] rounded-lg mt-[12px] py-[10px]'>
            <p className='w-1/4 text-left'>Order ID</p>
            <div className='flex items-center w-1/4 gap-[6px]'>
                <p>Order Date</p>
                <img src='src/assets/Triangle-Icon.svg' alt='Triangle icon' className='w-[8px] h-[8px]'/>
            </div>
            <p className='w-1/4'>Order amount</p>
            <div className='flex gap-[6px] w-1/4 items-center'>
                <p>Transaction fees</p>
                <CiCircleInfo  className='w-[14px] h-[14px]'/>
            </div>
        </div>
        
        <div>
            <ul>
                {orderLink.map((order, index) => (
                    <li key = {order.id} className='border-b-[1px] flex py-[14px]'>
                        <p className='w-1/4'>{order.orderID}</p>
                        <p className='w-1/4'>{order.date}</p>
                        <p className='w-1/4'>{order.amount}</p>
                        <p className='w-1/4'>{order.fee}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex gap-[24px] mt-[24px] justify-center'>

            <div className='flex gap-[6px] pl-[6px] pr-[12px] items-center py-[6px] border-[1px] rounded-lg'>
                <IoIosArrowBack />
                <p>Previous</p>
            </div>
            
            <div className='flex gap-[12px] items-center'>
                <p>1</p>
                <p>...</p>
                <p className='bg-[#146eb4] p-[4px] rounded-lg text-white'>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
            </div>

            <div className='flex gap-[6px] pl-[12px] pr-[6px] items-center py-[6px] border-[1px] rounded-lg'>
                <p>Next</p>
                <IoIosArrowForward />
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default DataTable
