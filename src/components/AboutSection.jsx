import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const title = useRef();
  const discription = useRef();
  const rating = useRef();
  const avatarGroup = useRef();

  useGSAP(() => {
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: title.current,
        start: "top 80%",
        end: "bottom top",
        // markers:true,
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.from(discription.current, {
      scrollTrigger: {
        trigger: discription.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.from(rating.current, {
      scrollTrigger: {
        trigger: rating.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
    });
    gsap.from(avatarGroup.current, {
      scrollTrigger: {
        trigger: avatarGroup.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
      y: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
    });
  });

  return (
    <div className=" md:flex justify-between items-center mx-10">
      <div className=" md:w-100 text-start">
        <span className="bg-white text-black rounded-3xl px-5 py-2 text-xl">
          Best Cocktails
        </span>
        <p
          ref={title}
          className="font-bold text-5xl my-5 font-modern-negra mt-8"
        >
          Where every detail matters—from muddle to garnish
        </p>
      </div>

      <div className=" md:w-130 text-start">
        <p ref={discription} className="text-2xl mt-2 font-serif">
          The Margarita is a classic that balances tangy lime, smooth tequila,
          and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always
          crisp & refreshing. Shaken, frozen, or on the rocks—it’s always crisp/
        </p>
        <div
          className="
          md:flex md:justify-between md:items-center"
        >
          <div ref={rating} className="w-[w-50vw] my-5">
            <p className="flex">
              <FaStar size={30} />
              <FaStar size={30} />
              <FaStar size={30} />
              <FaStar size={30} />
              <FaStarHalf size={30} />
            </p>
            <span className="text-6xl font-bold text-[#E1c878]">
              4.5<span className="text-2xl text-white">/5</span>
            </span>
            <p className="text-xl mt-4">More than +12000 customers</p>
          </div>

          <div className="h-full border"></div>

          <div
            ref={avatarGroup}
            className="flex justify-center items-center w-full my-5 "
          >
            {/* We just need a standard flex container here, no relative positioning needed */}
            <span className="flex items-center mx-5  px-20 py-2 bg-[#373737] rounded-4xl ">
              {/* First image sits normally */}
              <img
                src="/images/profile1.png"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#373737] relative z-10"
                alt="profile1"
              />

              {/* Subsequent images use -ml-5 to overlap the one before them */}
              <img
                src="/images/profile2.png"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#373737] -ml-5 relative z-20"
                alt="profile2"
              />

              <img
                src="/images/profile3.png"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#373737] -ml-5 relative z-30"
                alt="profile3"
              />

              <img
                src="/images/profile4.png"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#373737] -ml-5 relative z-40"
                alt="profile4"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
