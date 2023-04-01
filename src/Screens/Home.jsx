import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex p-2 '>
            <div className='basis-1/2 flex gap-3 flex-col'>
               <h1 className='font-bold'>Share Your Files</h1> 
               <div className='flex gap-3 flex-col'>
                    <Link to="/share">
                    <div className='cursor-pointer text-xl font bold hover:underline'> 
                        Share File
                    </div>
                    </Link>
                    <Link to="/download">
                        <div className='cursor-pointer text-xl font bold hover:underline'>
                            Download File
                        </div>
                    </Link>
               </div>
            </div>
            <div className='basis-1/2'>
                <img src="share.svg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home