import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative flex justify-center items-center w-screen h-screen pt-[6em] overflow-hidden">
        <div className="absolute w-80% text-center md:w-[50%]">
          <h1 className="font-serif text-[10vw] mb-5 md:text-7xl">
            Where to Find Us
          </h1>
          <div className="mb-10">
            <h2 className="text-2xl lg:text-4xl">VISIT OUR BAR</h2>
            <p className="text-l lg:text-2xl">
              456, Raq Blvd. #404, Los Angeles, CA 90210
            </p>
          </div>
          <div className="mb-10">
            <p className="text-2xl lg:text-4xl">Contact Us</p>
            <p className="text-l lg:text-2xl"> (555) 987-6543</p>
            <p className="text-l lg:text-2xl">hello@jsmcocktail.com</p>
          </div>
          <div className="mb-10">
            <p className="text-2xl lg:text-4xl">Open Every Day</p>
            <p className="text-l lg:text-3xl">Mon–Thu : 11:00am – 12am</p>
            <p className="text-l lg:text-3xl">Fri : 11:00am – 2am</p>
            <p className="text-l lg:text-3xl">Sat : 9:00am – 2am</p>
            <p className="text-l lg:text-3xl">Sun : 9:00am – 1am</p>
          </div>
          <div className="mb-10">
            <p className="text-2xl lg:text-4xl">Socials</p>
            <ul className="mx-20 flex justify-center items-center gap-5">
              <a href="">
                <FaInstagram className="text-3xl lg:text-5xl hover:text-[#E1C878] hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="">
                <FaFacebook className="text-3xl lg:text-5xl" />
              </a>
              <a href="">
                <IoLogoWhatsapp className="text-3xl lg:text-5xl" />
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute  w-full flex justify-between items-center bottom-0">
        <img
          src="images/hero-left-leaf.png"
          className="w-35 lg:absolute lg:top-130 lg:right-0"
          alt=""
        />

        <img
          src="images/hero-right-leaf.png"
          alt=""
          className="w-30 lg:absolute lg:top-10 lg:left-0"
        />
      </div>
    </div>
  );
};

export default Footer;
