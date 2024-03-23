import React from "react";

const Overlay = ({ active, setActive }) => {
  return active ? (
    <div
      className="fixed top-0 left-0 w-full h-full z-8 bg-lightgrey1"
      onClick={() => setActive(false)}
    ></div>
  ) : null;
};

export default Overlay;
