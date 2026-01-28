import React from 'react'

const Herosection1 = () => {
  return (
    <div className=' relative w-full h-[90vh]  border bg-radial from-[#434343]  to-[#000000] '>
      
      <h1 className='title-text mt-7 text-8xl md:text-9xl lg:text-[13em] font-bold'>MOJITO</h1>

      <div className='font-serif text-center text-base mt-6 sm:text-lg  px-6 md:absolute bottom-10 right-20 md:w-100 border'>
        Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
        <div className='mt-3 text-xl '>view cocktails</div>
      </div>

      <div className='hidden md:block absolute bottom-10 left-20 text-sm text-start '>
        Cool. Crisp. Classic.
        <div className='font-serif text-4xl text-[#E1c878]'>Sip the Spirit<br/> of Summer </div>
      </div>


      {/* <div className='absolute w-50 h-50 top-80 border md:w-50 md:top-20 bg-[url("/public/images/hero-left-leaf.png")] bg-cover bg-center '></div> */}

      <img
        src='/public/images/hero-left-leaf.png'
        className='absolute w-40 bottom-0 border md:w-50 md:top-20 object-center object-cover'
        alt=''
        />

      <img
        src='/public/images/hero-right-leaf.png'
        className='absolute w-40 top-70  md:top-0 z-100 right-0  '
        alt=''
        />

    </div>
  )
}

export default Herosection1
