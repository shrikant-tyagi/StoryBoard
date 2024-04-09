import React from 'react'
import { HiMiniClock } from "react-icons/hi2";
import Timer from './Timer';

const Promotion = () => {
  return (
    <div className=' bg-orange-200 items-center px-5 py-2 gap-x-6 flex justify-center md:justify-start'>
        <div className='items-center gap-2 bg-orange-300 rounded-full p-1 px-4 sm:flex hidden'>
            <div><HiMiniClock /></div>
            <div>One-Time Offer</div>
        </div>
        <div className='hidden md:flex'>
            Your AI Storyboarding Bundle Discount expires in 
        </div>
        <div className='flex md:hidden'>Offer Expires In</div>
        <div><Timer /></div>
        <div className='flex bg-pink-300 p-2 rounded-lg'>
            <button>Claim Discount</button>
        </div>
    </div>
  )
}

export default Promotion