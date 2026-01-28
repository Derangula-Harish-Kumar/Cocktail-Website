// import React from 'react'
import Navbar from './components/Navbar'
// import HeroSection from './Components/HeroSection'
import MocktailList from './components/MocktailList'
import AboutSection from './components/AboutSection'
import Herosection1 from './components/Herosection1'
import Images from './components/Images'
import TheArt from './components/TheArt'
import MySwiperComponent from './components/MySwiperComponent'


// import ScrollVideo from './components/ScrollVideo'


const App = () => {
  return (
    < >
      <Navbar/>
      {/* <div className=' bg-amber-800 flex justify-between items-center  backdrop-blur-2xl w-[100vw] h-[7em] md:h-15'></div> */}
      {/* <HeroSection1/> */}
      <Herosection1/>
     <MocktailList/>
     <AboutSection/>
     <Images/>
     <TheArt/>
     <MySwiperComponent/>
    </>
  )
}

export default App
