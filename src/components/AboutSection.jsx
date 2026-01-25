import React from 'react'

const AboutSection = () => {
  return (
    <div className='md:flex justify-between items-center'>
      <div className='md:w-100'>
        <span className='bg-white text-black rounded-3xl px-4 py-2'>Best Cocktails</span>
        <p className='font-bold text-4xl my-5'>Where every detail matters—from muddle to garnish</p>
      </div>

      <div className='md:w-130'>
          <p>The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing. Shaken, frozen, or on the rocks—it’s always crisp/</p>
          <div className='flex justify-between items-center   border'>
              <div className='w-[w-50vw]'>
                <p>stars</p>
                <span>4.5/5</span>
                <p className='text-[10px]'>More than +12000 customers</p>
              </div>

              <div className='h-full border'></div>

              <div className='flex justify-center items-center w-[50vw]'>
                <span className='flex  bg-[#373737] py-2 px-4 border-black items-center border rounded-3xl '>
                  <img src="/public/images/profile1.png" className='w-10 h-10' alt="profile1" />
                  <img src="/public/images/profile2.png"  className='w-10 h-10 relative -left-2' alt="profile2" />
                  <img src="/public/images/profile3.png" className='w-10 h-10 relative -left-4'   alt="profile3" />
                  <img src="/public/images/profile4.png" className='w-10 h-10 relative -left-5' alt="profile4" />
                </span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutSection
