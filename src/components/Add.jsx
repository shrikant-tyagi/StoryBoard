import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Add = ({setShowModal}) => {
  return (
    <div className='hidden md:flex justify-center items-center rounded-sm w-[65%] md:w-[400px] h-[330px] border-[1px] bg-gray-200 text-gray-400'>
        <button className='border-2 border-gray-400 w-14 h-14 rounded-full flex justify-center items-center'
        onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}

export default Add