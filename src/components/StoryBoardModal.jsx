import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff , faToggleOn , faXmark } from '@fortawesome/free-solid-svg-icons'


const StoryBoardModal = ({setShowModal}) => {

    const [off , setOff] = useState(true)

  return (
    <div className='w-screen h-screen absolute top-0 flex overflow-hidden'>
        <div className='w-[100%] h-[100%] bg-black bg-opacity-70 overflow-hidden' onClick={ () => setShowModal(false)}></div>

        <div className='w-[300px] h-[250px] md:w-[500px] md:h-[450px] bg-white rounded-lg fixed top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] p-6 flex flex-col gap-y-4'>
        <div className='flex justify-between items-center'>
            <h2 className='text-3xl font-bold'>New StoryBoard</h2>
            <button onClick={() => setShowModal(false)} className='hover:bg-gray-400 bg-gray-200 w-[40px] h-[40px] rounded-full'>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>

        <form className='flex flex-col gap-y-6'>
            <div>
                <label for='name'>StoryBoard Name</label><br/>
                <input type='text' placeholder='e.g. Default Project StoryBoard' className='w-[100%] h-14 border-2 p-2 mt-2'/>
            </div>

            <div className='mb-4'>
                <label for='frameSize'  className=''>Frame Size</label><br/>
                <select name="frames" id="frames" className='w-[100%] h-14 border-2 mt-2'>
                    <option value="16:9">Landscape (16:9)</option>
                    <option value="5:10">Portrait (5:10)</option>
                </select>
            </div>

            <div className='bg-gray-200 h-[2px]'></div>

            <div className='flex flex-col justify-between items-center mt-4 md:flex-row'>
                <div className='flex gap-2'>
                    <div className=''>
                        {off && <FontAwesomeIcon icon={faToggleOff} size='lg' onClick={() => setOff(false)}/>}
                        {!off && <FontAwesomeIcon icon={faToggleOn} size='lg' onClick={() => setOff(true)}/>}
                    </div>
                    <div>AI Assistant</div>
                </div>

                <button type='submit' className='bg-gray-300 p-3 rounded-md text-white hover:bg-gray-400'>Create StoryBoard</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default StoryBoardModal