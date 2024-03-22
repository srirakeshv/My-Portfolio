import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";
import Intro from "../../Components/Home/Intro";
import MyWork from "../../Components/Home/MyWork";
import Scene from "../../Components/Home/scroll";
import Button from "../../Components/Home/Button";
import KnowMe from "../../Components/Home/KnowMe";
import Footer from "../../Components/Common/Footer";
// import Buttons from "../../Components/Home/Button2";

const Landingpage = () => {
  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>
      <Navbar />
      <Banner />
      <Intro />
      <MyWork />
      <Scene />
      <KnowMe />
      <Footer />
    </div>
  );
};

export default Landingpage;
