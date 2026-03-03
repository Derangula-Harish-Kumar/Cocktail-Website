import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TheArt = () => {
  const parent = useRef(null);
  const title = useRef(null);
  const url1 = useRef(null);
  const url2 = useRef(null);
  const img = useRef(null);
  const imageDefination = useRef(null);
  const imageparameter = useRef(null);
  const imageDefination2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        scrub: 2,
        pin: true,
        // markers: true,
        end: "top -500%",
      },
    });

    tl.to(title.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.inout",
    })

      .to(imageparameter.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inout",
      })
      .to(url1.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inout",
      })
      .to(url2.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inout",
      })
      .to(".mask-img", {
        scale: 1,
        maskPosition: "center",
        maskSize: "400%",
        duration: 3,
        ease: "power2.in",
      })
      .fromTo(
        imageDefination.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      )
      .fromTo(
        imageDefination2.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      );
  });

  return (
    <div>
      <div
        ref={parent}
        className=" w-100vw h-screen md:w-screen bg-black text-white"
      >
        <div
          className=" h-full 
        md:mx-20"
        >
          <div>
            <div className="w-full relative pt-30 ">
              <h1
                ref={title}
                className="absolute w-full text-8xl font-bold text-center font-modern-negra text-transparent bg-clip-text bg-linear-to-t from-[#0f0f0f] to-[#ffffff] "
              >
                The ART
              </h1>

              <div className="flex justify-center items-center">
                <img
                  src="/images/under-img.jpg"
                  alt=""
                  className="mask-img  w-200 object-contain rounded-4xl "
                />
              </div>

              <div
                ref={imageparameter}
                className=" text-center text-3xl mb-5  font-serif font-bold
               md:hidden md:text-4xl "
              >
                <h1 className="">Sip-Worthy Perfection</h1>
              </div>

              {/* this is hidden div, visible after animation */}
              <div
                ref={imageDefination}
                className="absolute top-1/2 flex-col  md:top-3/5"
              >
                <div className=" text-center text-2xl m-10 mt-20 md:text-4xl  font-serif font-bold">
                  <h1 className="">Sip-Worthy Perfection</h1>
                  <h2>Made with Craft, Poured with Passion</h2>
                  <p className=" text-center text-sm ">
                    This isn't just a drink. It's a carefully crafted moment
                    made just for you.
                  </p>
                </div>
              </div>

              <div
                ref={url1}
                className="w-fit ml-5 
              lg:absolute lg:left-0 lg:top-1/2 "
              >
                <ul>
                  {goodLists.map((list, index) => (
                    <li key={index} className="flex gap-2 my-2">
                      <span className="text-2xl font-bold flex items-center">
                        <img src="/images/left-arrow.png" alt="" width={20} />
                      </span>
                      <p className="text-xl">{list}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                ref={url2}
                className="w-full mt-5 flex justify-end 
              lg:absolute lg:left-0 lg:top-1/2  lg:mt-0"
              >
                <ul className="w-fit mr-5">
                  {featureLists.map((list, index) => (
                    <li key={index} className="flex gap-2 my-2">
                      <span className="text-2xl font-bold flex items-center">
                        <img src="/images/left-arrow.png" alt="" width={20} />
                      </span>
                      <p className="text-xl">{list}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Adding two images */}
              <div
                ref={imageDefination2}
                className="w-full flex absolute bottom-0 justify-center gap-5 items-center md:-bottom-30"
              >
                <img
                  src="/images/drink4.png"
                  alt=""
                  className="w-40 relative rotate-20 -left-5"
                />
                <img
                  src="/images/drink1.png"
                  alt=""
                  className="w-40 relative -rotate-20 -right-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div  ref={parent} className='h-screen w-100vw bg-black text-white' >
    //     <div className="container  h-full pt-20 w-screen border">

    //         <div>

    //             <div className="cocktail-img w-screen relative border">
    //                 <h2 ref={title} className="title-text text-7xl absolute top-0 left-1/2 -translate-x-1/2 w-full ">The ART</h2>

    //                 <img ref={img} id='maskImage'
    //                 src="/images/under-img.jpg"
    //                 alt="cocktail"
    //                 className="absolute top-1/2   masked-img size-full object-contain "
    //                 />
    //             </div>

    //             <div id='title' className='w-screen px-8'>
    //                     <ul ref={url1}>
    //                          {
    //                              goodLists.map((list, index) => (
    //                                  <li key={index} className='flex gap-2 my-2'>
    //                                      <img src="/images/check.png" alt="image" className='w-5 h-5' />
    //                                      <p className='text-xl'>{list}</p>
    //                                  </li>
    //                              ))
    //                          }
    //                     </ul>
    //             </div>

    //             <div id='title' className='w-screen flex justify-end px-8 mt-10 md:mt-0'>
    //                 <ul ref={url2}>
    //                 {
    //                     featureLists.map((list, index) => (
    //                         <li key={index} className='flex items-center gap-2 my-2'>
    //                             <img src="/images/check.png" alt="image" className='w-5 h-5' />
    //                             <p className='text-xl'>{list}</p>
    //                         </li>
    //                     ))
    //                 }
    //                 </ul>
    //             </div>

    //         </div>

    // <div className=' text-center text-2xl m-10 mt-10 md:text-4xl font-serif font-bold'>
    //     <h1 className="">Sip-Worthy Perfection</h1>
    //     <h2>Made with Craft, Poured with Passion</h2>
    //     <p className=' text-center text-sm '>
    //         This isn't just a drink. It's a carefully crafted moment made just for you.
    //     </p>
    // </div>

    //     </div>
    // </div>
  );
};

export default TheArt;
