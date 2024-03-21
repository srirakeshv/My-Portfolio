import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";
import Intro from "../../Components/Home/Intro";
import MyWork from "../../Components/Home/MyWork";
import Scene from "../../Components/Home/scroll";

const Landingpage = () => {
  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>
      <Navbar />
      <Banner />
      <Intro />
      <MyWork />
      <Scene />
    </div>
  );
};

export default Landingpage;
