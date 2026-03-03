import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import SplitType from 'split-type';

const Herosection = () => {
  const container = useRef();
  const titleRef = useRef();

  useGSAP(
    () => {
      // const split = new SplitType(titleRef.current, { types: "chars" });

      const tl = gsap.timeline();

      tl.from("h1 ", {
        y: 150,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        ease: "power3.out",
      });

      tl.from(
        "#description",
        {
          y: 30,
          opacity: 0,
          duration: 1.5,
          ease: "power1.out",
        },
        "-=0.2",
      );

      tl.from(
        "#leaf1",
        {
          x: -100,
          opacity: 0,
          rotate: -15,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1",
      );

      tl.from(
        "#leaf2",
        {
          x: 100,
          opacity: 0,
          rotate: 15,
          duration: 1.5,
          ease: "power3.out",
        },
        "<",
      );

      // return () => split.revert();
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative w-full h-screen bg-radial from-[#434343] to-[#000000] overflow-hidden "
    >
      <div className="overflow-hidden">
        <h1
          ref={titleRef}
          className="text-8xl text-center -tracking-wider font-modern-negra text-transparent bg-clip-text bg-linear-to-t from-[#0f0f0f] to-[#ffffff]  font-serif
        md:text-[18vw] 
        lg:text-[25em] font-bold "
        >
          MOJITO
          {/* <span id='title-sapn'>M</span>
        <span id='title-sapn'>O</span>
        <span id='title-sapn'>J</span>
        <span id='title-sapn'>I</span>
        <span id='title-sapn'>T</span>
        <span id='title-sapn'>O</span> */}
        </h1>
      </div>

      <div
        id="description"
        className="font-serif text-start text-xl mt-6 px-10 leading-8
      md:absolute md:top-[50vw] md:left-[20vw] md:text-3xl md:px-0 md:w-[70vw] md:leading-10 md:mt-10
      lg:text-3xl lg:w-xl lg:h-60 lg:absolute lg:top-[70vh] lg:left-[70vw] "
      >
        Every cocktail on our menu is a blend of premium ingredients, creative
        flair, and timeless recipes — designed to delight your senses.
        <div className="font-modern-negra mt-5 text-2xl text-[#E1c878] lg:text-4xl">
          view cocktails
        </div>
      </div>

      <div
        className="hidden h-50 text-start z-10 text-xl  
      md:block md:bottom-10 md:absolute md:top-1/3 left-1/2 md:transform md:translate-x-[-70%] md:translate-y-[-70%] 
      lg:block lg:absolute lg:top-[80vh] lg:left-[15vw] lg:text-3xl "
      >
        Cool. Crisp. Classic.
        <div className="text-6xl  text-[#E1c878] md:leading-20 lg:text-7xl font-modern-negra">
          Sip the Spirit
          <br /> of Summer{" "}
        </div>
      </div>

      <img
        id="leaf1"
        src="images/hero-left-leaf.png"
        className="absolute w-50 bottom-0 object-center object-cover z-50
        md:w-50 md:top-20 
        lg:w-[25vw] lg:top-0 "
        alt=""
      />

      <img
        id="leaf2"
        src="/images/hero-right-leaf.png"
        className="absolute w-50 top-70 object-center object-cover z-50 right-0 
        md:w-40 md:absolute md:top-1/2  md:right-0
        lg:w-[20vw] lg:-top-70 "
        alt=""
      />
    </div>
  );
};

export default Herosection;
