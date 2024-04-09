import React, { useState } from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";
import A from './A';
import { CiSearch } from "react-icons/ci";
import image from '../images/3096985.png'

const NavComponent = () => {

  const [show , setShow] = useState(true);

  const showHandler = (e) => {

    if(e.target.value !== '') setShow(false);

    else setShow(true);
  }

  return (
    <div className='flex flex-col md:flex-row justify-between items-center relative pl-6 py-6 bg-white gap-4'>

      <div className='flex justify-center items-center gap-x-4 '>
        <div className='w-[50px] h-[50px]'>
          <img src={image} alt='' className='rounded-full'/>
        </div>
        <div className='font-bold text-2xl'>
          Project Dashboard
        </div>
      </div>

      <div className='flex items-center gap-x-4 mr-0'>
        <div className='flex items-center'>
          {
            show && <CiSearch className='relative text-gray-300 font-bold left-7' size={20}/>
          }
          <input type='text' placeholder='     Search my storyboards' className='border-2 p-2 w-[340px]' id='search' 
            onChange={showHandler}/>
        </div>

        <div className='border-2 border-blue-300 bg-blue-200 p-2 rounded-md hidden sm:flex'>
          {/* icon */}
          <div>Quick Start</div>
        </div>

        <div className='hidden md:flex'> <A /></div>

        <div className='bg-black w-10 h-12 hidden items-center justify-center rounded-l-full md:flex'>
          <HiOutlineLightningBolt color='white' size={25}/>
        </div>
      </div>

    </div>
  )
}

export default NavComponent