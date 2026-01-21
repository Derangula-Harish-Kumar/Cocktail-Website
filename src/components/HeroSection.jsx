// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // const videoRef = useRef(null);
  // const heroSectionRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
    
  //   // Ensure the video metadata is loadeds
  //   const onloadedmetadata = () => {
  //     const scrollTriggerInstance = ScrollTrigger.create({
  //       trigger: heroSectionRef.current,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       pin: true,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         // Calculate the video's current time based on scroll progress
  //         if (video.duration) {
  //           const progress = self.progress;
  //           video.currentTime = video.duration * progress;
  //         }
  //       },
  //     });

  //     // Play the video on scroll
  //     video.play();
  //     video.pause();

  //     // Cleanup function
  //     return () => {
  //       scrollTriggerInstance.kill();
  //       video.removeEventListener('loadedmetadata', onloadedmetadata);
  //     };
  //   };

  //   if (video.readyState >= 1) {
  //     onloadedmetadata();
  //   } else {
  //     video.addEventListener('loadedmetadata', onloadedmetadata);
  //   }

  //   // Cleanup in case the component unmounts before metadata loads
  //   return () => {
  //     video.removeEventListener('loadedmetadata', onloadedmetadata);
  //   };
  // }, []);

  return (
    // <>
    //   <div className='w-full h-full mt-[7em]'>
    //     <div className=''>
    //       <div className='flex justify-center'>
    //         <h1 className='font-serif text-8xl mt-5'>MOJITO</h1>
    //       </div>
    //       <div className=''>
    //         <p>
    //           Every cocktail on our menu is a blend of premium ingredients,
    //           creative flair, and timeless recipes designed to delight your
    //           senses.
    //         </p>
    //         <div>View cocktails</div>
    //       </div>
          
    //     </div>


    //     {/* <div  >
    //       <section id='section1' className='relative h-[50vh] border'>
    //         <img
    //           src='/public/images/hero-left-leaf.png'
    //           className='absolute w-30 bottom-0'
    //           alt=''
    //         />
    //         <div className='flex justify-center items-center h-full'>
    //           <video
    //             // ref={videoRef}
    //             src='/public/videos/input.mp4'
    //             muted
    //             playsInline
    //             className='border object-cover'
    //           ></video>
    //         </div>
            // <img
            //   src='/public/images/hero-right-leaf.png'
            //   className='absolute w-25 top-0 right-0'
            //   alt=''
            // />
    //       </section>


    //       <section id='section2' className='relative h-[70vw] border'>
    //         <img
    //           src='/public/images/cocktail-left-leaf.png'
    //           className='absolute w-30 bottom-0'
    //           alt=''
    //         />
    //         <img
    //           src='/public/images/cocktail-right-leaf.png'
    //           className='absolute w-30 top-0 right-0'
    //           alt=''
    //         />
    //       </section>
    //     </div> */}
    //   </div>
    // </>


    <div className="h-full w-full bg-amber-100">
        f
    </div>
  );
};

export default HeroSection;
