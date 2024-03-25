import React, { useState, useEffect, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [color, setColor] = useState(0);
  const colors = useMemo(
    () => ["text-grey1", "text-yellow-400", "text-rose-500"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevIndex) => {
        return (prevIndex + 1) % colors.length;
      });
    }, 4300);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [color, colors]);

  return (
    <div
      className="flex justify-center p-3 bg-violet1 font-k2d"
      style={{ minHeight: "88vh" }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-center">
        <section className="flex-1 text-2xl sm:text-3xl md-1:text-4xl xl:text-5xl">
          <h1 className="flex gap-1">
            Hi{" "}
            <img
              className="w-8 h-8 sm:w-12 sm:h-12"
              src={`${process.env.PUBLIC_URL}/Asset/Images/Hi.png`}
              alt=""
            />
          </h1>
          <p className="mt-2 sm:mt-5">
            I am
            <TypeAnimation
              key={colors[color]}
              className={`text-2xl sm:text-3xl md-1:text-4xl xl:text-5xl ${colors[color]}`}
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
          <p
            className={`mt-3 text-base text-center sm:text-start sm:text-lg text-grey1`}
          >
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
