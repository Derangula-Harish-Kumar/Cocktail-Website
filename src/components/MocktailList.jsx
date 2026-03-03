import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MocktailList = () => {
  const listRef1 = useRef();
  const listRef2 = useRef();

  useGSAP(() => {
    gsap.from(listRef1.current, {
      scrollTrigger: {
        trigger: listRef1.current,
        // markers: true,
        start: "top 70%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.from(listRef2.current, {
      scrollTrigger: {
        trigger: listRef2.current,
        start: "top 70%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className="md:h-[80vh] md: lg:flex justify-between   items-center ">
      <div
        ref={listRef1}
        className="px-5  text-start md:px-15 md:w-[80vw] lg:w-[30vw] "
      >
        <h1 className="text-2xl md:text-3xl">Most Popular cocoktails:</h1>

        <ul>
          {/* <a href="">
            <div>cocktail</div>
            <p>AU | Bottle</p>
          </a> */}
          {cocktailLists.map(({ name, country, detail, price }) => (
            <a
              key={name}
              href="#"
              className="flex justify-between items-center my-6 mx-1"
            >
              <div>
                <h5 className="text-2xl md:text-3xl text-amber-200 font-modern-negra">
                  {name}
                </h5>
                <p className="font-serif">
                  {country} | {detail}
                </p>
              </div>

              <span className="text-2xl ">-{price}</span>
            </a>
          ))}
        </ul>
      </div>

      <div
        ref={listRef2}
        className="px-5 my-20 md:px-20 text-start 
        md:my-15 md:w-[80vw] md:float-end
        lg:w-[30vw]"
      >
        <h1 className="text-2xl md:text-3xl">Most loved mocktails:</h1>

        <ul>
          {/* <a href="">
            <div>cocktail</div>
            <p>AU | Bottle</p>
          </a> */}
          {mockTailLists.map(({ name, country, detail, price }) => (
            <a
              key={name}
              href="#"
              className="flex justify-between items-center my-6 mx-1"
            >
              <div>
                <h5 className="text-2xl md:text-3xl text-amber-200 font-modern-negra">
                  {name}
                </h5>
                <p>
                  {country} | {detail}
                </p>
              </div>

              <span className="text-2xl">-{price}</span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MocktailList;
