import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  const pricingRef = useRef(null);

  useEffect(() => {
    gsap.set(pricingRef.current, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: pricingRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(pricingRef.current, { duration: 1, opacity: 1, y: 0 });
      },
    });
  }, []);

  return (
    <section ref={pricingRef} className="pricing">
      <h2>plaid-pattern-section</h2>
    </section>
  );
}

export default Pricing;
