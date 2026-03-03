import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const container = useRef();

  useGSAP(
    () => {
      // 1. Swapped gsap.from() to gsap.to()
      gsap.to(".image-card", {
        y: 0, // Move them back to their original position
        opacity: 1, // Fade them in to 100% visible
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          // 2. This makes them hide again if the user scrolls back to the top!
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="w-screen h-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-flow-dense p-5"
    >
      {/* CRITICAL FIX: 
        Added `opacity-0` and `translate-y-24` (which is about 100px down) to the Tailwind classes.
        Now they are invisible the moment the page loads! 
      */}
      <div className="image-card opacity-0 translate-y-0 bg-[url('/images/abt1.png')] bg-cover bg-center h-100 w-[90%] m-5 rounded-4xl"></div>
      <div className="image-card opacity-0 translate-y-24 bg-[url('/images/abt2.png')] bg-cover bg-center h-100 w-[90%] m-5 rounded-4xl lg:col-span-2"></div>
      <div className="image-card opacity-0 translate-y-24 bg-[url('/images/abt3.png')] bg-cover bg-center h-100 w-[90%] m-5 rounded-4xl lg:col-span-3"></div>
      <div className="image-card opacity-0 translate-y-24 bg-[url('/images/abt4.png')] bg-cover bg-center h-100 w-[90%] m-5 rounded-4xl"></div>
      <div className="image-card opacity-0 translate-y-24 bg-[url('/images/abt5.png')] bg-cover bg-center h-100 w-[90%] m-5 rounded-4xl"></div>
    </div>
  );
};

export default Images;

{
  /* <div className='h-auto grid grid-cols-1 md:grid-cols-4 md:grid-flow-dense  gap-10'>
        <img src="public\images\abt1.png" alt=""    className='col-span-1 w-screen rounded-5xl'/>
        <img src="public\images\abt2.png" alt=""    className='col-span-2 object-cover h-full rounded' />
        <img src="public\images\abt3.png" alt=""    className='col-span-2 object-cover h-full rounded' />
        <img src="public\images\abt4.png" alt=""    className='col-span-2 object-cover w-full rounded' />
        <img src="public\images\abt5.png" alt=""    className='col-span-1 object-cover w-full rounded' />
  </div> */
}
