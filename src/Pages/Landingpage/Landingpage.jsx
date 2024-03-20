import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";

const Landingpage = () => {
  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Landingpage;
