import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";
import Intro from "../../Components/Home/Intro";
import MyWork from "../../Components/Home/MyWork";

const Landingpage = () => {
  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>
      <Navbar />
      <Banner />
      <Intro />
      <MyWork />
    </div>
  );
};

export default Landingpage;
