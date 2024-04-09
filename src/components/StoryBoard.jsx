import React from 'react'
import pic from '../images/pic1.jpg'

const StoryBoard = () => {
  return (
    <div className='flex flex-col rounded-sm max-w-[400px] max-h-[350px] border-[1px]'>
        <img src={pic} alt='' width={400} className='h-[250px]'/>

        <div className='m-4'>
            <h3>AI Character Demo storyboard</h3>
            <div className='text-gray-400'>Updated 19 Mar 24</div>
        </div>
    </div>
  )
}

export default StoryBoard