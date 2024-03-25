import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleCheck = () => {
      window.innerWidth < 500 ? setBg(true) : setBg(false);
    };
    window.addEventListener("resize", handleCheck);
    return () => window.removeEventListener("resize", handleCheck);
  }, []);

  return (
    <div
      className="bg-slate-950 flex flex-col justify-center items-center gap-8 font-k2d p-2"
      style={{
        minHeight: "75vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/Asset/Images/footerbg.png)`,
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${bg ? "100% 100%" : "100% 150%"}`,
        backgroundSize: `${bg ? "45% 40%" : ""}`,
      }}
    >
      <div className="bg-violet1 max-w-5xl w-full h-32 rounded-2xl -mt-56 sm:-mt-44 md:-mt-40 flex justify-center items-center">
        <li className="list-none w-full flex justify-center items-center">
          <a
            href="mailto:srirakeshv@gamil.com"
            className="max-w-44 w-full flex justify-center items-center"
          >
            <button className="bg-pink-600 rounded-md p-3 text-grey1 text-xl shadow-lg shadow-pink-900 max-w-44 w-full transform hover:-translate-y-1 transition-transform">
              Ping Me
            </button>
          </a>
        </li>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/Asset/Images/Logo.png`}
        alt="Logo"
        className="w-20 h-12"
      />
      <p className="flex flex-col text-center text-grey1 text-base sm:text-2xl relative">
        Success is not final, failure is not fatal:{" "}
        <span>It is the courage to continue that counts.</span>
        <img
          src={`${process.env.PUBLIC_URL}/Asset/Images/quote.png`}
          alt="Quote"
          className="absolute -top-5 -left-8 w-10 h-10 z-0"
        />
        <img
          src={`${process.env.PUBLIC_URL}/Asset/Images/quote.png`}
          alt="Quote"
          className="absolute -bottom-5 -right-10 w-10 h-10 z-0 transform -rotate-180"
        />
      </p>
      <div className="mt-3 flex gap-3 items-center">
        <a
          className={`rounded-full border-lightgrey p-3  ${
            hover1 ? "bg-grey1 text-slate-950" : "bg-slate-950 text-lightgrey"
          }`}
          style={{ borderWidth: "1px" }}
          href="https://github.com/srirakeshv"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <Github />
        </a>
        <a
          className={`rounded-full border-lightgrey p-3  ${
            hover2 ? "bg-grey1 text-slate-950" : "bg-slate-950 text-lightgrey"
          }`}
          style={{ borderWidth: "1px" }}
          href="https://www.linkedin.com/in/sri-rakesh-v/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <Linkedin />
        </a>
        <a
          className={`rounded-full border-lightgrey p-3  ${
            hover3 ? "bg-grey1 text-slate-950" : "bg-slate-950 text-lightgrey"
          }`}
          style={{ borderWidth: "1px" }}
          href="mailto:srirakeshv@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
