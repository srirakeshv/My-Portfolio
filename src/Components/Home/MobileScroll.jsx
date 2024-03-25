import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const MobileScroll = () => {
  const [hover, setHover] = useState(null);
  const [hover2, setHover2] = useState(null);

  const websites = [
    {
      websiteName: "Rytsense Technologies",
      description:
        "Build a website for the company during my internship as Frontend developer",
      link: "https://rytsensetech.com/",
      imageLink: "/Asset/Images/Rytsense-website.jpg",
    },
    {
      websiteName: "Tamil Tharangini",
      description:
        "Build a tamil website for college cultural club - literature club",
      link: "https://srirakeshv.github.io/Tamilmandram_website/",
      imageLink: "/Asset/Images/Tamil-tharangini.jpeg",
    },
    {
      websiteName: "Blogr",
      description: "Build a blog website given by Frontend Mentor site",
      link: "https://srirakeshv.github.io/IntroBlogrPage/",
      imageLink: "/Asset/Images/Blogr.jpg",
    },
    {
      websiteName: "Jobss",
      description: "Build a job listing website given by Frontend Mentor site",
      link: "",
      imageLink: "/Asset/Images/Jobss.jpg",
    },
  ];

  return (
    <div className="bg-violet1 font-k2d flex justify-center items-center p-3 pb-20 md:hidden">
      <div className="max-w-6xl flex gap-5 flex-wrap items-center justify-center">
        {websites.map((website, index) => (
          <div
            className="basis-80 h-52 rounded-lg p-3 flex flex-col justify-center"
            key={index}
            style={{
              backgroundImage: `linear-gradient(rgba(46, 44, 44, 0.521), rgba(36, 35, 35, 0.6)), url(${website.imageLink})`,
              objectFit: "cover",
              backgroundSize: "100% 100%",
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: hover === index ? -100 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={`text-grey1 text-3xl font-semibold ${
                hover === index ? "hidden" : "flex"
              }`}
            >
              {website.websiteName}
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: hover === index ? -100 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={`text-grey1 text-lg mt-4 ${
                hover === index ? "hidden" : "flex"
              }`}
            >
              {website.description}
            </motion.div>
            {hover === index && (
              <motion.div
                className="self-center"
                initial={{ y: 100 }}
                animate={{ y: hover === index ? 0 : 100 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <button
                  className={`self-center border-2 border-lightgrey rounded-full w-44 text-xl p-1 ${
                    hover2 === index ? "bg-grey1 text-violet1" : "text-grey1"
                  }`}
                  onMouseEnter={() => setHover2(index)}
                  onMouseLeave={() => setHover2(null)}
                >
                  <a
                    href={website.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site
                  </a>
                </button>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileScroll;
