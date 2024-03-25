import React, { useRef } from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";
import Intro from "../../Components/Home/Intro";
import MyWork from "../../Components/Home/MyWork";
import Scene from "../../Components/Home/scroll";
import Button from "../../Components/Home/Button";
import KnowMe from "../../Components/Home/KnowMe";
import Footer from "../../Components/Common/Footer";
import MobileScroll from "../../Components/Home/MobileScroll";

const Landingpage = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  // useEffect(() => {
  //   console.log("workRef.current:", workRef.current);
  //   console.log("aboutRef.current:", aboutRef.current);
  // }, []);

  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>
      <div className="bg-violet1">
        <Navbar workRef={workRef} aboutRef={aboutRef} />
        <Banner />
      </div>
      <div ref={aboutRef}>
        <Intro />
      </div>
      <div className="bg-violet1" id="work" ref={workRef}>
        <MyWork />
        <Scene />
        <MobileScroll />
      </div>
      <KnowMe />
      <Footer />
    </div>
  );
};

export default Landingpage;
