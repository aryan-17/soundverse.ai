import React from 'react'
import { Progress } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import { CiWallet } from "react-icons/ci";

const ProgressTab = ({ days }) => {
    const percentage = ((days-1) / 7) * 100;
    return (
        <div className='flex flex-col items-center gap-y-5'>
            <div className='w-1/2 font-semibold text-2xl text-center'>Compose Daily and Win Tokens!</div>
            <div className='ml-2 w-1/3 text-pure-greys-25'>
                Challenge yourself to create a new tune each day! Earn 500 tokens after 3 days and an extra 1000 tokens after 7 days. Stay creative and keep composing to unlock your rewards.
            </div>
            <div>
                <div className='flex items-center gap-x-3'>
                    <div className='text-2xl'><CiWallet /></div>
                    <div>Day {days-1} of {days <= 3 ? (3) : (7)} ({days <= 3 ? (500) : (1000)} Tokens) </div>
                </div>
            </div>
            <div className='w-1/3'>
                <Progress className='bg-richblack-600 duration-300 ease-in-out' progress={percentage} size={"lg"} color='purple' />
            </div>
        </div>
    )
}

export default ProgressTab
