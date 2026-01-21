import React from 'react'

const Herosection1 = () => {
  return (
    <div className=' relative w-full h-[70vh] md:h-[80vh] mt-[7em] border'>
      
      <h1 className=' text-center text-8xl my-6 md:text-[14vw] font-bold'>MOJITO</h1>

      <div className='text-center text-sm px-6 md:absolute bottom-10 right-0 md:w-100 md:text-2xl border'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
        <div className='mt-3'>view cocktails</div>
      </div>

      <p className='hidden md:block absolute bottom-10 left-0'>
        Cool. Crisp. Classic.
        <div>Sip the Spirit<br/> of Summer </div>
        
      </p>

      <img
        src='/public/images/hero-left-leaf.png'
        className='absolute w-30 top-80 border md:w-50 md:top-20'
        alt=''
        />

      <img
        src='/public/images/hero-right-leaf.png'
        className='absolute w-30 top-50 md:w-50 md:-top-25 z-100 right-0 border '
        alt=''
        />

    </div>
  )
}

export default Herosection1
