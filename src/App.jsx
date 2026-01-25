// import React from 'react'
import Navbar from './components/Navbar'
// import HeroSection from './Components/HeroSection'
import MocktailList from './components/MocktailList'
import AboutSection from './components/AboutSection'
import Herosection1 from './components/Herosection1'
import Images from './components/Images'

// import ScrollVideo from './components/ScrollVideo'


const App = () => {
  return (
    <>
      <Navbar/>
      {/* <HeroSection1/> */}
      <Herosection1/>
     <MocktailList/>
     <AboutSection/>
     <Images/>
    </>
  )
}

export default App
