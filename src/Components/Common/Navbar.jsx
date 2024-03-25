import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import MobileMenu from "../Home/MobileMenu";
import Overlay from "../Home/Overlay";
import "../Home/styles2.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ workRef, aboutRef }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Ensure the refs are properly assigned after the component is mounted
    aboutRef.current = aboutRef.current || null;
    workRef.current = workRef.current || null;
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    // console.log("Scrolling to section:", ref);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActive(false); // Close mobile menu if open
    }
  };

  const navigate = useNavigate();

  return (
    <nav className="bg-violet1 p-3 font-k2d flex justify-center relative">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <img
          src={`${process.env.PUBLIC_URL}/Asset/Images/Logo.png`}
          alt="Logo"
          className="w-20 h-12 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex items-center gap-5 text-xl text-grey1">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(workRef)}
          >
            Work
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li>
            <a href="mailto:srirakeshv@gamil.com">
              <AwesomeButton type="primary" className="aws-btn1">
                Connnect Me
              </AwesomeButton>
            </a>
          </li>
        </ul>
        <img
          className="md:hidden cursor-pointer"
          src={`${process.env.PUBLIC_URL}/Asset/Images/icons8-fries-menu-48.png`}
          alt="fries-menu"
          onClick={() => setActive(!active)}
        />
      </div>
      {active && (
        <MobileMenu
          active={active}
          setActive={setActive}
          workRef={workRef}
          aboutRef={aboutRef}
        />
      )}
      <Overlay active={active} setActive={setActive} />
    </nav>
  );
};

export default Navbar;
