import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import "../Home/style.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const [hover, setHover] = useState(null);

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

  useEffect(() => {
    const races = document.querySelector(".races");
    if (!races) return; // Ensure races element exists
    // let racesWidth = races.offsetWidth;
    // let amountToScroll = racesWidth - window.innerWidth;

    const updateScrollTrigger = () => {
      let racesWidth = races.scrollWidth;
      let amountToScroll = racesWidth - window.innerWidth;

      const tween = gsap.to(races, {
        x: -amountToScroll,
        duration: 3,
        ease: "none",
      });

      // Update ScrollTrigger animation and end point
      ScrollTrigger.create({
        trigger: ".racesWraper",
        start: "top 20",
        end: "+=" + amountToScroll,
        pin: true,
        animation: tween,
        scrub: 1,
        markers: false,
      });
    };

    // Call updateScrollTrigger whenever content changes
    updateScrollTrigger();

    // Clean up previous ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="racesWraper font-k2d bg-violet1">
      <div className="races">
        {websites.map((webiste, index) => (
          <div
            className="first flex max-w-fit text-grey1 border-2 border-grey1 bg-violet1"
            style={{ height: "100vh" }}
            key={index}
          >
            <div className="flex flex-col gap-10 justify-center items-start px-4">
              <h2 className="text-3xl font-bold">{webiste.websiteName}</h2>
              <p className="text-xl" style={{ maxWidth: "500px" }}>
                {webiste.description}
              </p>
              <button
                className={`text-xl border-2 border-grey1 rounded-xl px-3 p-2 cursor-pointer ${
                  hover === index
                    ? "text-violet1 bg-slate-50"
                    : "bg-violet1 text-grey1"
                }`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <a
                  href={webiste.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  Visit Site <ChevronRight />
                </a>
              </button>
            </div>
            <div className="" style={{ maxWidth: "450px", width: "100%" }}>
              <img
                className="w-full h-full rounded-r-lg"
                src={`${process.env.PUBLIC_URL}${webiste.imageLink}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
