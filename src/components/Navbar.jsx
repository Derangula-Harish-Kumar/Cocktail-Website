import React from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 flex justify-between items-center  backdrop-blur-2xl w-full h-[7em]'>
        <div className=' w-full md:flex justify-between items-center  mx-10'  >
            <a href="#home" className='flex items-center gap-2 justify-center  font-bold text-2xl'>
                <img src="/public/images/logo.png" alt="logo" className='w-9' /> 
                <p>Velvet Pour</p>
            </a>

            <ul className='flex items-center justify-between text-sm mx-1 m-3 md:gap-10 '>
                {
                    navLinks.map((link)=>(
                        <li key={link.id}>
                            <a href={link.id}>{link.title}</a>
                        </li>
                    ))
                }
            </ul>

        </div>
    </nav>
  )
}

export default Navbar
