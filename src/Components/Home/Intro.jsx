import React from "react";
import { FileCode2 } from "lucide-react";

const Intro = () => {
  const Languages = ["HTML", "CSS", "Javascript", "ReactJS", "Tailwind"];
  const Tools = ["Git", "Github", "VSCode", "Netlify"];

  return (
    <section
      style={{ minHeight: "100vh" }}
      className="flex flex-col items-center font-k2d"
    >
      <p className="max-w-6xl w-full text-center text-xl flex flex-col p-3 mt-10">
        <span className="text-4xl font-semibold">Hey there! I'm Rakesh,</span>{" "}
        <span className="leading-8 mt-5">
          A budding Frontend developer fueled by curiosity and a passion for
          creativity. My journey into the world of design began with crafting
          websites for my college's cultural club, where I discovered the thrill
          of bringing ideas to life in the digital realm. Building upon this
          foundation, I delved deeper into web development during an internship
          at Rytsense Technologies, leveraging technologies like ReactJS and
          Tailwind CSS to create immersive digital experiences. With each
          project, I'm committed to pushing boundaries, refining my skills, and
          unleashing my creativity to make a lasting impact. Join me as I
          continue to explore and evolve on this exciting design journey.
        </span>
      </p>
      <div className="mb-5 w-full flex justify-center px-3">
        <div className="bg-violet1 shadow-xl shadow-slate-600 max-w-96 w-full min-h-12 rounded-lg mt-7 flex flex-col gap-3 items-center p-4">
          <div className="mt-2 w-16 h-16 rounded-full bg-grey1 flex justify-center items-center">
            <FileCode2 className="text-violet1" size={30} />
          </div>
          <h2 className="text-grey1 text-2xl font-bold mt-3">
            Frontend Developer
          </h2>
          <p className="text-center text-lg text-lightgrey">
            I enjoy creating projects from scratch and putting my ideas into
            real, browser-based projects.
          </p>
          <div className="mt-5">
            <h3 className="text-grey1 text-center text-xl font-bold">
              Languages that I know
            </h3>
            <ul className="flex gap-1 mt-1 text-slate-950 text-center flex-wrap font-semibold">
              {Languages.map((Language, index) => (
                <li key={index}>
                  {index === Languages.length - 1 ? Language : Language + ","}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h3 className=" text-grey1 text-center text-xl font-bold">
              Dev Tools
            </h3>
            <ul className="flex flex-col gap-1 mt-1 text-slate-950 text-center font-semibold">
              {Tools.map((Tool, index) => (
                <li key={index}>{Tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
