import React, { useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import "../Home/styles2.css";
import { X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ active, setActive, workRef, aboutRef }) => {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "100%" });
    }
  }, [active, controls]);

  useEffect(() => {
    // Ensure the refs are properly assigned after the component is mounted
    aboutRef.current = aboutRef.current || null;
    workRef.current = workRef.current || null;
  }, [aboutRef, workRef]);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    // console.log("Scrolling to section:", ref);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActive(false); // Close mobile menu if open
    }
  };

  return (
    <motion.div
      className="absolute top-16 z-10 right-0 flex flex-col"
      initial={{ x: "100%" }}
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <X
        className="text-grey1 font-semibold self-end cursor-pointer"
        size={40}
        onClick={() => setActive(false)}
      />
      <ul
        className="flex flex-col gap-5 w-80 py-5 rounded-md bg-grey1 text-violet1 text-2xl"
        style={{ minHeight: "80vh" }}
      >
        <li
          className="px-3 pl-5 pb-2 cursor-pointer"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="px-3 pl-5 pb-2 cursor-pointer"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
          onClick={() => scrollToSection(workRef)}
        >
          Work
        </li>
        <li
          className="px-3 pl-5 pb-2 cursor-pointer"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        <li className="text-center mt-7">
          <a href="mailto:srirakeshv@gamil.com">
            <button className="bg-violet1 rounded-md p-3 text-grey1 text-xl shadow-lg shadow-violet-600 max-w-44 w-full transform hover:-translate-y-1 transition-transform">
              Connect Me
            </button>
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
