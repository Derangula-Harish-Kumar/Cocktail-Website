import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <>
      {/* dummy nav to avoid layout shift */}
      <nav className="w-screen h-[8em] md:h-15"> </nav>

      <nav
        className="fixed top-0 left-0 z-1000 flex justify-between items-center  backdrop-blur w-full h-[8em] 
    md:h-15
    lg:h-20 "
      >
        <div className=" w-full md:flex justify-between items-center  mx-10">
          <a
            href="#home"
            className="flex items-center gap-2 justify-center  font-bold text-2xl"
          >
            <img
              src="/public/images/logo.png"
              alt="logo"
              className="w-8 md:w-[2vw]"
            />
            <p className="font-serif text-xl">Velvet Pour</p>
          </a>

          <ul className="flex items-center justify-between text-sm mx-1 m-3 md:gap-12 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.id} className="text-lg  ">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
