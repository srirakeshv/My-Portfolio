import React, { useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import "../Home/styles2.css";
import { X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const MobileMenu = ({ active, setActive }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (active) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "100%" });
    }
  }, [active, controls]);

  return (
    <motion.div
      className="absolute top-16 z-10 right-0 flex flex-col"
      initial={{ x: "100%" }}
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <X
        className="text-grey1 font-semibold self-end"
        size={40}
        onClick={() => setActive(false)}
      />
      <ul
        className="flex flex-col gap-5 w-80 py-5 rounded-md bg-grey1 text-violet1 text-2xl"
        style={{ minHeight: "80vh" }}
      >
        <li
          className="px-3 pl-5 pb-2"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
        >
          Home
        </li>
        <li
          className="px-3 pl-5 pb-2"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
        >
          Work
        </li>
        <li
          className="px-3 pl-5 pb-2"
          style={{ borderBottomWidth: "0.1px", borderColor: "#7005fc8f" }}
        >
          About
        </li>
        <li className="text-center mt-7">
          <a href="mailto:srirakeshv@gamil.com">
            <AwesomeButton type="primary" className="aws-btn1">
              Connnect Me
            </AwesomeButton>
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
