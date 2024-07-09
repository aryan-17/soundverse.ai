import React from 'react'
import { FaCoins } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Task = ({task}) => {
  return (
    <div className='w-full flex flex-col gap-y-10'>
      <div className='h-20 flex items-center w-1/5 mx-auto justify-center gap-x-16  rounded-full bg-pure-greys-500'>
        <div className='flex items-center gap-x-3'>
          <div className='text-caribbeangreen-200'>
            <SiTicktick />
          </div>
          <div>
            <div className='text-yellow-400 flex justify-center'><FaCoins /></div>
            <div className='gradient'>+50</div>
          </div>
        </div>
        <div className='mr-4'>
          <div className='text-xl text-center text-black font-bold'>Mission</div>
          <div className='font-semibold text-richblack-900'>Daily check-in</div>
        </div>
      </div>
      <div>
        <div className='h-20 flex items-center w-1/5 mx-auto justify-center gap-x-16  rounded-full bg-pure-greys-500'>
          <div className='flex items-center gap-x-3'>
            <div className='text-caribbeangreen-200'>
              {
                task && <SiTicktick />
              }
            </div>
            <div>
              <div className='text-yellow-400 flex justify-center'><FaCoins /></div>
              <div className='gradient'>+50</div>
            </div>
          </div>
          <div>
            <div className='text-xl text-center text-black font-bold'>Mission</div>
            <div className='text-richblack-900 font-semibold'>Create Music</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task;
