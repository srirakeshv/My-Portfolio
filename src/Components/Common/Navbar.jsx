import React, { useState } from "react";
import "tailwindcss/tailwind.css";

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
            className={`border-2 border-grey1 rounded-3xl p-2 px-5 cursor-pointer ${
              hover1 ? "bg-grey1 text-violet1" : "text-grey1"
            }`}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <a href="mailto:srirakeshv@gamil.com">Connect me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
