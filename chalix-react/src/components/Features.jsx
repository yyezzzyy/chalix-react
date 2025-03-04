import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Features.css";
import scale1 from "../assets/scale1.jpg";
import scale2 from "../assets/scale2.jpg";
import scale3 from "../assets/scale3.jpg";
import scale4 from "../assets/scale4.jpg";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const featuresRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current;

    gsap.set(items, { opacity: 0, y: 50 });

    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center+=100",
        onEnter: () => {
          gsap.to(item, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            delay: index * 0.2,
          });
        },
      });
    });
  }, []);

  return (
    <section ref={featuresRef} className="features">
      <h2 className="expertise-title">Our Expertise</h2>
      <h3 className="expertise-subtitle">
        깊이 있는 전문 지식으로
        <br />
        지속 가능한 미래를 설계합니다
      </h3>
      <div className="expertise-grid">
        <div
          ref={(el) => (itemRefs.current[0] = el)}
          className="expertise-item"
        >
          <img src={scale1} alt="컨설팅부" className="expertise-image" />
          <div className="expertise-content">
            <h4>컨설팅부</h4>
            <p>
              다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및
              탄소배출권 관리 및 국가와 기업의 경쟁력을 고취합니다
            </p>
          </div>
        </div>
        <div
          ref={(el) => (itemRefs.current[1] = el)}
          className="expertise-item"
        >
          <img src={scale2} alt="글로벌연구센터" className="expertise-image" />
          <div className="expertise-content">
            <h4>글로벌연구센터</h4>
            <p>
              기후변화 대응 및 ESG 경영 선도를 위해 국제개발협력, 정책연구,
              신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을
              제공합니다
            </p>
          </div>
        </div>
        <div
          ref={(el) => (itemRefs.current[2] = el)}
          className="expertise-item"
        >
          <img src={scale3} alt="정책연구부" className="expertise-image" />
          <div className="expertise-content">
            <h4>정책연구부</h4>
            <p>
              국가, 지방자치단체, 사업장 등이 환경 및 기후변화에 선도적으로
              대응하도록 정책 개발 및 대안 마련합니다
            </p>
          </div>
        </div>
        <div
          ref={(el) => (itemRefs.current[3] = el)}
          className="expertise-item"
        >
          <img src={scale4} alt="기술개발부" className="expertise-image" />
          <div className="expertise-content">
            <h4>기술개발부</h4>
            <p>
              새로운 바이러스 제거, 지속적인 환경 전화적인 항균·항바이러스
              나노소재의 개발로 새로운 제품과 서비스를 제공합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
