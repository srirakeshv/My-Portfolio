import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

const Navbar = () => {
  const [hover1, setHover1] = useState(false);

  return (
    <nav className="bg-violet1 p-3 font-k2d flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <img
          src={`${process.env.PUBLIC_URL}/Asset/Images/Logo.png`}
          alt="Logo"
          className="w-20 h-12"
        />
        <ul className="flex items-center gap-5 text-xl text-grey1">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li
          // onMouseEnter={() => setHover1(true)}
          // onMouseLeave={() => setHover1(false)}
          >
            <a href="mailto:srirakeshv@gamil.com">
              <AwesomeButton type="primary">Connnect Me</AwesomeButton>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
