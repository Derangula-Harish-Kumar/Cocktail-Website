import React from 'react'
import {goodLists,featureLists} from "../../constants"

const TheArt = () => {
  return (
    <div className= 'relativ w-screen h-screen bg-black'>
        {/* //inner frame */}
        <div className='masked-img absolute w-screen h-screen flex justify-center items-center  border'>
            <span className='bg-amber-600'>
                <img src="public/images/under-img.jpg" alt="" className='w-200 md:rounded-4xl'/>
                <div className='text-center text-2xl mx-18 md:text-4xl my-3'>Made with Craft, Poured with Passion </div>
                <p className='mx-9 text-center text-sm '>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
            </span>

            <img src="public/images/drink4.png" alt="" className='w-40 absolute bottom-0 left-0 md:w-50 md:top-10 left-5 rotate-12' />
            <img src="public/images/drink3.png" alt="" className='w-40 absolute bottom-0 right-0 md:w-50 md:bottom-30 right-5 -rotate-12' />
        </div>

        {/* Outer frame */}
        <div className='absolute z-50 w-screen h-screen flex justify-center items-center'>
            <div className='w-full  relative'>
                <h1 className='text-center text-[20vw]'>The ART</h1>

                {/* <img
                 className='absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '
                 src="/public/images/mask-img.png"
                 alt="" /> */}

                <div className='flex justify-between items-center mx-25 my-20'>
                    <ul className='bg-amber-600'>
                        { 
                            goodLists.map((list, index)=>(
                                 <li key={index} className='flex gap-2 my-2'>
                                    <img src="public/public/images/check.png" alt="image" className='w-5 h-5' />
                                    <p className='text-xl'>{list}</p>
                                 </li>
                                 
                            ))
                        }
                    </ul>

                    <ul>
                        { 
                            featureLists.map((list, index)=>(
                                 <li key={index} className='flex gap-2 my-2'>
                                    <img src="public/public/images/check.png" alt="image" className='w-5 h-5' />
                                    <p className='text-xl'>{list}</p>
                                 </li>
                                 
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TheArt
