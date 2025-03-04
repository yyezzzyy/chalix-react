import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mainVideo from "../assets/mainvid.mp4";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set(heroRef.current, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(heroRef.current, { duration: 1, opacity: 1, y: 0 });
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={mainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          color: "white",
          bottom: 50,
          left: 60,
          fontSize: "36px",
        }}
      >
        <p>
          지속 가능한 미래와 고객의 비즈니스 성공을 위한 혁신적인 환경 솔루션을
          제공합니다
        </p>
      </div>
    </section>
  );
}

export default Hero;
