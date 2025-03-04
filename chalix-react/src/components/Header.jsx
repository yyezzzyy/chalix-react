import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logo2.png";

function Header() {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    backgroundColor: "rgba(40, 44, 52, 0.9)",
    marginTop: location.pathname === "/board" ? "-90px" : "0",
  };

  useEffect(() => {
    gsap.set(headerRef.current, {
      translate: "none",
      rotate: "none",
      scale: 1,
      opacity: 1,
    });
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/board") {
      navigate("/board");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header ref={headerRef} style={headerStyle}>
      <div onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </div>
      <nav style={{ flexGrow: 1, textAlign: "center" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li style={{ margin: "0 20px" }}>
            <a
              href="#who-we-are"
              style={{ color: "white", textDecoration: "none" }}
            >
              Who We Are
            </a>
          </li>
          <li style={{ margin: "0 20px" }}>
            <a
              href="#what-we-can"
              style={{ color: "white", textDecoration: "none" }}
            >
              What We Can
            </a>
          </li>
          <li style={{ margin: "0 20px" }}>
            <a
              onClick={handleNavClick}
              style={{ color: "white", textDecoration: "none" }}
            >
              What We Do
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
