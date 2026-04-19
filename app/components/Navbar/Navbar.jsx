"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaFire } from "react-icons/fa";
import gsap from "gsap";

const Logo = () => {
  return <Image src="/download.svg" alt="Logo" width={120} height={40} />;
};

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);
  const mobileBtnRef = useRef(null);
  const mobileBtnTextRef = useRef(null);

  const menuItems = ["Expertises", "Work", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Nav item hover effect
  useEffect(() => {
    const items = document.querySelectorAll(".nav-item");
    const handlers = [];

    items.forEach((item) => {
      const text = item.querySelector(".nav-text");
      const duplicate = item.querySelector(".nav-text-duplicate");

      const enter = () => {
        gsap.killTweensOf([item, text, duplicate]);
        const tl = gsap.timeline();
        // tl.to(item, { y: -4, duration: 0.3, ease: "power3.out" });
        // tl.to(item, { backgroundColor: "#fdba74", duration: 0.15 }, 0);
        // tl.to(item, { backgroundColor: "#000000", duration: 0.25 });
        // tl.to(text,      { y: "-100%", color: "#ffffff", duration: 0.3, ease: "power3.out" }, 0);
        // tl.to(duplicate, { y: "-100%", color: "#ffffff", duration: 0.3, ease: "power3.out" }, 0);
      };

      const leave = () => {
        gsap.killTweensOf([item, text, duplicate]);
        const tl = gsap.timeline();
        tl.to(item, {
          y: 0,
          backgroundColor: "#ffffff",
          duration: 0.3,
          ease: "power3.out",
        });
        tl.to(text, { y: "0%", color: "#000000", duration: 0.25 }, 0);
        tl.to(duplicate, { y: "0%", color: "#000000", duration: 0.25 }, 0);
      };

      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      handlers.push({ item, enter, leave });
    });

    return () => {
      handlers.forEach(({ item, enter, leave }) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll(".mobile-item");
    const tl = gsap.timeline({ paused: true });

    gsap.set(menu, {
      y: "60%",
      rotation: 8,
      scale: 0.95,
      opacity: 0,
      transformOrigin: "top center",
    });
    gsap.set(items, { y: -40, opacity: 0 });

    tl.to(menu, {
      y: "0%",
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
    });
    tl.to(
      items,
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: "power3.out" },
      "-=0.3",
    );

    if (menuOpen) tl.play();
    else tl.reverse();
  }, [menuOpen]);

  const handleBtnEnter = (ref, textRef) => {
    gsap.to(ref.current, {
      skewX: -8,
      rotate: 3,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",
    });
    gsap.to(textRef.current, { x: -4, duration: 0.25, ease: "power2.out" });
  };

  const handleBtnLeave = (ref, textRef) => {
    gsap.to(ref.current, {
      skewX: 0,
      rotate: 0,
      scale: 1,
      duration: 0.45,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(textRef.current, { x: 0, duration: 0.35, ease: "power2.out" });
  };

  const handleBtnClick = (e, ref) => {
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(ref.current, {
      rotate: 60,
      skewX: -22,
      scaleX: 0.65,
      scaleY: 0.8,
      duration: 0.16,
      ease: "power4.in",
    });
    tl.to(ref.current, {
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.65,
      ease: "elastic.out(1.1, 0.45)",
    });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[12vh] flex items-center justify-between px-4 md:px-8">
          <Logo />

          <div className="hidden md:flex bg-white rounded-xl px-4 py-2 gap-1 text-sm font-semibold">
            {menuItems.map((item) => (
              <div
                key={item}
                className="nav-item cursor-pointer px-5 py-2 rounded-lg bg-white overflow-hidden"
              >
                <div className="relative h-5 overflow-hidden">
                  <span className="nav-text block">{item}</span>
                  <span className="nav-text-duplicate block absolute left-0 top-full">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
 
          <button
            ref={btnRef}
            onMouseEnter={() => handleBtnEnter(btnRef, btnTextRef)}
            onMouseLeave={() => handleBtnLeave(btnRef, btnTextRef)}
            onClick={(e) => handleBtnClick(e, btnRef)}
            className="hidden md:flex bg-[#fcb8fa] px-4 py-2 rounded-xl items-center gap-3 border-none cursor-pointer"
            style={{
              willChange: "transform",
              transformOrigin: "40% 60%",
              outline: "none",
              userSelect: "none",
            }}
          >
            <span
              ref={btnTextRef}
              className="text-sm font-semibold text-black"
              style={{ willChange: "transform", whiteSpace: "nowrap" }}
            >
              Get Results
            </span>
            <div className="bg-white p-2 rounded-lg shrink-0">
              <FaFire color="#fa5525" />
            </div>
          </button>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden mt-7 mr-5 ${
              menuOpen ? "bg-white" : "bg-[#fcb8fa]"
            } p-4 rounded-lg flex flex-col gap-1 z-50`}
          >
            <span
              className={`h-0.5 w-6 bg-black transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </nav>


      <div
        ref={menuRef}
        className="fixed inset-0 z-40 mt-4 ml-3 mr-3 rounded-2xl md:hidden flex items-center justify-center"
        style={{ background: "#fcb8fa" }}
      >
        <div className="flex flex-col items-center gap-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setMenuOpen(false)}
              className="mobile-item w-40 py-3 p-4 rounded-lg bg-white text-2xl font-semibold"
            >
              {item}
            </button>
          ))}

          <button
            ref={mobileBtnRef}
            onMouseEnter={() => handleBtnEnter(mobileBtnRef, mobileBtnTextRef)}
            onMouseLeave={() => handleBtnLeave(mobileBtnRef, mobileBtnTextRef)}
            onClick={(e) => handleBtnClick(e, mobileBtnRef)}
            className="mobile-item w-52 py-4 bg-black text-white rounded-2xl flex justify-between items-center px-6"
            style={{
              willChange: "transform",
              transformOrigin: "40% 60%",
              outline: "none",
              userSelect: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              ref={mobileBtnTextRef}
              className="font-semibold text-lg"
              style={{ willChange: "transform", whiteSpace: "nowrap" }}
            >
              Get Results
            </span>
            <div className="bg-white p-2 rounded-lg shrink-0">
              <FaFire color="#fa5525" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
