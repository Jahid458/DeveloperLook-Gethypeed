"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    tag: "Buillt",
    borderColor: "#FF4D1C",
    overlayBg: "#FF4D1C",
    poster: "/1.avif",
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    tag: "Roasta",
    borderColor: "#2979FF",
    overlayBg: "#2979FF",
    poster: "/3.avif",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
  },
  {
    id: 3,
    title: "Content die écht smaakt (en raakt)",
    tag: "Loco",
    borderColor: "#00C98D",
    overlayBg: "#00C98D",
    poster: "/2.avif",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
  },
];

function ProjectCard({ project, offsetY = 0 }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="card-wrap"
      style={{ marginTop: offsetY }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card"
        style={{
          borderColor: project.borderColor,
          transform: hovered
            ? "skewY(-4deg) scale(1.04)"
            : "skewY(0deg) scale(1)",
        }}
      >
    
        <Image
          src={project.poster}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.35s ease",
            zIndex: 1,
          }}
          priority
        />

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            zIndex: 2,
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 30,
            padding: "0 10px 10px",   /* gap around the pill */
          }}
        >
          <div
            style={{
              background: project.overlayBg,
              borderRadius: 18,         
              padding: "16px 18px 18px",
            }}
          >

             <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 30,
            width: 36,
            height: 36,
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H5M12 2V9"
              stroke="#111"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
       
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "white",
                margin: "0 0 12px",
                lineHeight: 1.25,
                fontFamily: "inherit",
              }}
            >
              {project.title}
            </p>

          
            <span
              style={{
                display: "inline-block",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.5)",
                padding: "4px 12px",
                borderRadius: 6,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {project.tag}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-wrap {
          flex: 1;
          min-width: 0;
        }

        .card {
          position: relative;
          border-radius: 22px;
          border: 3px solid;
          overflow: hidden;
          height: 420px;
          background: #111;
          cursor: pointer;
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        @media (max-width: 768px) {
          .card {
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
}

export default function ContentDatScoort() {
  return (
    <section
      style={{
        background: "#f5f0eb",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        padding: "72px 60px 70px",
        boxSizing: "border-box",
      }}
    >
 
      <div style={{ marginBottom: 52, maxWidth: 380 }}>
        <h1
          style={{
            fontSize: "clamp(3rem, 5vw, 4.8rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "#111",
            margin: "0 0 20px",
          }}
        >
          Content
          <br />
          dat scoort.
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#555",
            margin: "0 0 24px",
            maxWidth: 300,
          }}
        >
          Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
          doelgroep. Met creatieve content die werkt en het verschil maakt.
        </p>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "1.5px solid #111",
            color: "#111",
            textDecoration: "none",
            fontSize: "0.82rem",
            fontWeight: 700,
            padding: "9px 16px",
            borderRadius: 6,
            letterSpacing: "0.02em",
          }}
        >
          Bekijk al ons werk <span>→</span>
        </a>
      </div>

   
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 20,
        }}
      >
        <ProjectCard project={projects[0]} offsetY={60} />
        <ProjectCard project={projects[1]} offsetY={0} />
        <ProjectCard project={projects[2]} offsetY={-40} />
      </div>
    </section>
  );
}