import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/SlideImage.css";

gsap.registerPlugin(ScrollTrigger);

function SlideImage() {
  const containerRef = useRef(null);
  const centerImageRef = useRef(null);
  const imageRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 현재 경로가 /board일 경우 ScrollTrigger 설정하지 않음
    if (location.pathname === "/board") return;

    const images = imageRefs.current;
    const centerImage = centerImageRef.current;
    const container = containerRef.current;

    // 초기 상태 설정
    gsap.set(images, { opacity: 0, scale: 0.8 });
    gsap.set(centerImage, {
      scale: 1,
      width: "400px",
      height: "300px",
      borderRadius: "8px",
    });

    // 스크롤 트리거 애니메이션
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        onLeave: () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        },
        onEnterBack: () => {
          if (location.pathname === "/board") {
            ScrollTrigger.getAll().forEach((t) => t.kill());
          }
        },
      },
    });

    // 이미지들이 순차적으로 나타나는 애니메이션
    images.forEach((img, index) => {
      tl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        index * 0.5
      );
    });

    // 중앙 이미지 확대 애니메이션
    tl.to(
      centerImage,
      {
        scale: 1,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 2,
      },
      1
    );

    // 다른 이미지들 페이드아웃
    tl.to(
      images,
      {
        opacity: 0,
        duration: 1,
      },
      1.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [location.pathname]); // location.pathname을 의존성 배열에 추가

  const handleButtonClick = () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.set(containerRef.current, { clearProps: "all" }); // 모든 GSAP 속성 초기화
    navigate("/board");
  };

  // board 페이지일 때는 렌더링하지 않음
  if (location.pathname === "/board") return null;

  return (
    <div ref={containerRef} className="slide-container">
      <h1 className="main-title">
        Environmental consultancy firm
        <br />
        offering high-value advisory services
      </h1>
      <div className="image-grid">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src="/src/assets/5.png"
          alt="Environmental 1"
          className="grid-image image1"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src="/src/assets/4.png"
          alt="Environmental 2"
          className="grid-image image2"
        />
        <img
          ref={centerImageRef}
          src="/src/assets/1 (1).png"
          alt="Environmental 3"
          className="center-image"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src="/src/assets/3.png"
          alt="Environmental 4"
          className="grid-image image3"
        />
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          src="/src/assets/2.png"
          alt="Environmental 5"
          className="grid-image image4"
        />
      </div>
      <button className="cta-button" onClick={handleButtonClick}>
        사업실적 →
      </button>
    </div>
  );
}

export default SlideImage;
