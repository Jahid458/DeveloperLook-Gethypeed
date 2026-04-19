"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

const cardData = [
  {
    id: 1,
    bg: "#ffffff",
    badgeBg: "#eae4d8",
    badgeColor: "#333333",
    titleColor: "#111111",
    subtitleColor: "#111111",
    descColor: "#444444",
    numColor: "#eae4d8",
    ctaBg: "#fa5424",
    ctaColor: "#ffffff",
    ctaIconBg: "#ffffff",
    ctaIconColor: "#111111",
    videoBorder: "#fa5424",
    num: "01",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    cta: "Meer over social strategie",
    ctaHref: "/expertises/social-strategie",
    videoSrc: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
  },
  {
    id: 2,
    bg: "#fcb8fa",
    badgeBg: "#ffffff",
    badgeColor: "#333333",
    titleColor: "#2d0030",
    subtitleColor: "#2d0030",
    descColor: "#4a0050",
    numColor: "#fdd0fe",
    ctaBg: "#ffffff",
    ctaColor: "#111111",
    ctaIconBg: "#111111",
    ctaIconColor: "#ffffff",
    videoBorder: "#ffffff",
    num: "02",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    cta: "Meer over content creatie",
    ctaHref: "/expertises/content-creatie",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
  },
  {
    id: 3,
    bg: "#33c791",
    badgeBg: "#ffffff",
    badgeColor: "#333333",
    titleColor: "#052e1a",
    subtitleColor: "#052e1a",
    descColor: "#063b21",
    numColor: "#73e2b6",
    ctaBg: "#ffffff",
    ctaColor: "#111111",
    ctaIconBg: "#111111",
    ctaIconColor: "#ffffff",
    videoBorder: "#ffffff",
    num: "03",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    cta: "Meer over activatie",
    ctaHref: "/expertises/activatie",
    videoSrc: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
  },
  {
    id: 4,
    bg: "#0d8dff",
    badgeBg: "#ffffff",
    badgeColor: "#333333",
    titleColor: "#001e40",
    subtitleColor: "#001e40",
    descColor: "#002850",
    numColor: "#28aaff",
    ctaBg: "#ffffff",
    ctaColor: "#111111",
    ctaIconBg: "#111111",
    ctaIconColor: "#ffffff",
    videoBorder: "#ffffff",
    num: "04",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    cta: "Meer over data",
    ctaHref: "/expertises/data",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
  },
];

const Cards = () => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const els = cardRefs.current;
      const total = els.length;
      if (!els[0]) return;

      gsap.set(els[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < total; i++) {
        if (els[i]) gsap.set(els[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".expertise-sticky",
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        const cur = els[i];
        const next = els[i + 1];
        if (!cur || !next) continue;
        tl.to(cur, { scale: 0.88, rotation: 5, duration: 1, ease: "none" }, i);
        tl.to(next, { y: "0%", duration: 1, ease: "none" }, i);
      }

      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      if (container.current) ro.observe(container.current);

      return () => {
        ro.disconnect();
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <ReactLenis root>
      <section
        ref={container}
        style={{ background: "#faf4ec" }}
        className="w-full"
      >
        <div className="px-6 pt-16 pb-10 md:px-12 lg:px-20"></div>

        <div
          style={{ height: `${cardData.length * 100}vh` }}
          className="w-full"
        >
          <div className="expertise-sticky h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16">
            <div className="relative w-full max-w-6xl h-[88vh]">
              {cardData.map((card, i) => (
                <div
                  key={card.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  style={{ background: card.bg }}
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                >
                  <CardContent card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

const CardContent = ({ card }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row justify-between items-stretch px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 gap-6">

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <span
            style={{
              background: card.badgeBg,
              color: card.badgeColor,
              borderRadius: "6px",
              padding: "5px 14px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            Expertise
          </span>

          <h1
            style={{
              color: card.titleColor,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
          >
            {card.title}
          </h1>
        </div>
        <div className="mt-auto pt-8 md:pt-0">
          <h3
            style={{ color: card.subtitleColor, letterSpacing: "-0.02em" }}
            className="text-xl md:text-2xl font-bold mb-3"
          >
            {card.subtitle}
          </h3>

          <p
            style={{ color: card.descColor, lineHeight: 1.65 }}
            className="text-sm md:text-base lg:text-lg font-medium mb-6 max-w-md"
          >
            {card.desc}
          </p>

          <a
            href={card.ctaHref}
            style={{
              background: card.ctaBg,
              color: card.ctaColor,
              borderRadius: "10px",
              padding: "10px 16px",
              fontSize: "13px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateX(4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            {card.cta}
            <span
              style={{
                background: card.ctaIconBg,
                color: card.ctaIconColor,
                width: "28px",
                height: "28px",
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                flexShrink: 0,
              }}
            >
              →
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between shrink-0">
        <span
          style={{
            color: card.numColor,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none",
          }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold self-end"
        >
          {card.num}
        </span>

        <div
          style={{
            border: `6px solid ${card.videoBorder}`,
            borderRadius: "16px",
            overflow: "hidden",
            transform: "rotate(3deg)",
            transition: "transform 0.4s ease",
            width: "clamp(130px, 20vw, 220px)",
            height: "clamp(200px, 34vw, 340px)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "rotate(3deg)")
          }
        >
          <video
            src={card.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
