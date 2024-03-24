import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
// import "react-awesome-button/dist/styles.css";

const Footer = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <div
      className="bg-violet1 flex flex-col justify-center items-center gap-8 font-k2d"
      style={{ minHeight: "70vh" }}
    >
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
            hover1 ? "bg-grey1 text-violet1" : "bg-violet1 text-lightgrey"
          }`}
          style={{ borderWidth: "1px" }}
          href="https://www.linkedin.com/in/sri-rakesh-v/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <Github />
        </a>
        <a
          className={`rounded-full border-lightgrey p-3  ${
            hover2 ? "bg-grey1 text-violet1" : "bg-violet1 text-lightgrey"
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
            hover3 ? "bg-grey1 text-violet1" : "bg-violet1 text-lightgrey"
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
      <li className="list-none">
        <a href="mailto:srirakeshv@gamil.com">
          <AwesomeButton type="primary" className="aws-btn1">
            Connnect Me
          </AwesomeButton>
        </a>
      </li>
    </div>
  );
};

export default Footer;
