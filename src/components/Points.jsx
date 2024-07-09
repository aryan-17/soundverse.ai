import React from 'react'
import { AiFillFire, AiOutlineFire } from "react-icons/ai";
import { CiWallet } from 'react-icons/ci';

const Points = ({ points, days }) => {
  return (
    <div className='flex items-center gap-5 text-xl'>
      <div className='flex gap-2 items-center'>
        {
          days - 1 !== 0 ? (<div><AiFillFire className='text-peach' /></div>) : (<div><AiOutlineFire /></div>)
        }
        <div>
          {days - 1}
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='text-2xl'>
          <CiWallet />
        </div>
        <div className='gradient font-semibold'>
          {points}
        </div>
      </div>
    </div>
  )
}

export default Points;
