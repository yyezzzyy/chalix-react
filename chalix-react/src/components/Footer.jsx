import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.set(footerRef.current, { opacity: 1, y: 50 });

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(footerRef.current, { duration: 1, opacity: 1, y: 0 });
      },
    });
  }, []);

  return (
    <footer ref={footerRef}>
      <p>© 2024 Chalix. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
