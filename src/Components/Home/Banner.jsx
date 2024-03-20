import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [color, setColor] = useState(0);
  const colors = ["text-grey1", "text-yellow-400", "text-rose-500"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevIndex) => {
        return (prevIndex + 1) % colors.length;
      });
    }, 4300);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div
      className="flex justify-center p-3 bg-violet1 font-k2d"
      style={{ minHeight: "88vh" }}
    >
      <div className="max-w-6xl w-full flex items-center">
        <section className="flex-1 text-5xl">
          <h1 className="flex gap-1">
            Hi{" "}
            <img
              className="w-12 h-12"
              src={`${process.env.PUBLIC_URL}/Asset/Images/Hi.png`}
              alt=""
            />
          </h1>
          <p className="mt-5">
            I am
            <TypeAnimation
              key={colors[color]}
              className={`text-5xl ${colors[color]}`}
              sequence={[
                " Frontend",
                500,
                " Frontend Developer", //  Continuing previous Text
                500,
                " Frontend",
                500,
                "",
                500,
              ]}
              repeat={Infinity}
            />
          </p>
          <p className={`mt-3 text-lg text-grey1`}>
            (I design and code beautifully simple things, and I love what I do.)
          </p>
        </section>
        <section className="flex-1">
          <div
            className="h-96"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/Asset/Images/blob.svg)`,
              objectFit: "cover",
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 100%",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Asset/Images/3d-render-code-testing-functional-test-usability-removebg-preview.png`}
              alt="Illustrator"
              className="w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
