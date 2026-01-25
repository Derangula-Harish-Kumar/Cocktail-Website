import React from 'react'

const Images = () => {
  return (
    <div className='border w-screen'>
      <div className='h-auto grid grid-cols-1 md:grid-cols-4 grid-flow-dense  gap-3'>
        <img src="public\images\abt1.png" alt=""    className='col-span-1 object-cover w-full rounded'/>
        <img src="public\images\abt2.png" alt=""    className='col-span-2 object-cover h-full rounded' />
        <img src="public\images\abt3.png" alt=""    className='col-span-2 object-cover h-full rounded' />
        <img src="public\images\abt4.png" alt=""    className='col-span-2 object-cover w-full rounded' />
        <img src="public\images\abt5.png" alt=""    className='col-span-1 object-cover w-full rounded' />
      </div>
    </div>
  )
}

export default Images
