import React from 'react'

const Herosection1 = () => {
  return (
    <div className=' relative w-full h-[80vh] mt-[5em] border'>
      
      <h1 className='text-center text-9xl'>MOJITO</h1>
      <p>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
        <button>view cocktails</button>
      </p>
      <p>some special font</p>
      <img
        src='/public/images/hero-left-leaf.png'
        className='absolute w-30 bottom-0'
        alt=''
        />

      <img
        src='/public/images/hero-right-leaf.png'
        className='absolute w-25 top-0 right-0'
        alt=''
        />

    </div>
  )
}

export default Herosection1
