import React, { useState } from 'react';
import A from './A';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiFolders } from "react-icons/pi";
import  {FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import StoryBoard from './StoryBoard';
import Add from './Add';
import StoryBoardModal from './StoryBoardModal';

const ProjectComponent = () => {

  const [showModal , setShowModal] = useState(false);

  return (
    <div>
      <div className='p-8 border-t-2'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <A />
            <div className='font-bold text-2xl'>Adam Cooper Team</div>
          </div>
          
          <button className='text-gray-100 bg-gray-900 p-1 px-6 rounded-md' >New Project</button>
        </div>

        <div className='bg-white mt-8 rounded-md min-h-[480px] p-8 '>
          <div className='flex justify-between'>

            <div className='flex items-center gap-4'>
              <div><PiFolders size={40}/></div>
              <div>
                <div className='text-2xl'>Default Project</div>
                <div className='text-gray-400'>1 storyboard</div>
              </div>
            </div>

            <div className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faEllipsisVertical} size='1.8x'/>
              <RiArrowDropDownLine size={40}/>
            </div>

          </div>

          <div className='flex my-6 gap-6 flex-col md:flex-row items-center'>
            <StoryBoard />
            <Add setShowModal={setShowModal}/>
          </div>
        </div>
      </div>

      {
        showModal && <StoryBoardModal setShowModal={setShowModal} />
      }
    </div>
  )
}

export default ProjectComponent