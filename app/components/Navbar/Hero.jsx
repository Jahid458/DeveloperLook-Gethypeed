"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Hero = () => {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(2);
        setIsMobile(true);
      } else {
        setVisibleCards(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, visibleCards);

    cardsRef.current.forEach((card, i) => {
      gsap.set(card, {
        rotate: isMobile ? (i === 0 ? 10 : -9) : Math.random() * 20 - 10,

        x: isMobile
          ? i === 0
            ? 10
            : -20 
          : 0,
        zIndex: isMobile
          ? i === 0
            ? 20 
            : 10 
          : 10,
      });
    });
  }, [visibleCards, isMobile]);

  const handleMouseEnter = (index) => {
    if (isMobile) return;

    gsap.to(cardsRef.current, {
      x: (i) => (i < index ? -40 : i > index ? 40 : 0),
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(cardsRef.current[index], {
      scale: 1.08,
      rotate: 0,
      zIndex: 50,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (isMobile) return;

    gsap.to(cardsRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(cardsRef.current[index], {
      scale: 1,
      // eslint-disable-next-line react-hooks/purity
      rotate: Math.random() * 20 - 10,
      zIndex: 10,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const cardColors = [
    "bg-[#0d8dff]",
    "bg-blue-400",
    "bg-[#33c791]",
    "bg-yellow-400",
  ];

  return (
    <div className="min-h-screen w-full bg-[#faf4ec]">
    
      <div className="text-[10vw] md:text-[7vw] pt-[40vh] px-[4vw] font-semibold tracking-tighter leading-none">
        <div>
          <span>Get</span>
          <span className="ml-2">Hyped.</span>
          <span className="ml-3">Get</span>
        </div>
        <div>
          <span>Noticed.</span>
          <span className="ml-3">Get</span>
          <span className="ml-2">Results.</span>
        </div>
      </div>

      <div className="text-lg md:text-2xl font-semibold px-[4vw] mt-4">
        <p>Klaar met gokken op content</p>
        <p>die niets oplevert?</p>
      </div>


      <div className="mt-10 px-[4vw]">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-0 relative">
          {cardColors.slice(0, visibleCards).map((color, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className={`
                ${color}
                w-[45%] md:w-[22vw]
                h-[40vh] md:h-[60vh]
                rounded-3xl
                cursor-pointer
                relative
                overflow-hidden
                shadow-xl
                shrink-0
              `}
            >
     
              {i === 0 && (
                <>
                  <h1 className="text-xl md:text-6xl font-semibold p-3">
                    10M+
                  </h1>
                  <p className="text-xs md:text-2xl font-semibold border-b-2 mt-[22vh] mx-3 border-black">
                    Organische views
                  </p>
                  <p className="text-[10px] md:text-base font-semibold mx-3">
                    Groei door slimme content
                  </p>
                </>
              )}

              {i === 1 && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
                  autoPlay
                  loop
                  muted
                />
              )}

         
              {i === 2 && (
                <>
                  <h1 className="text-xl md:text-6xl font-semibold p-3">
                    30M+
                  </h1>
                  <p className="text-xs md:text-2xl font-semibold border-b-2 mt-[22vh] mx-3 border-black">
                    Merken geholpen
                  </p>
                  <p className="text-[10px] md:text-base font-semibold mx-3">
                    Van start-up tot multinational
                  </p>
                </>
              )}

     
              {i === 3 && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
                  autoPlay
                  loop
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
