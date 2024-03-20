import React from "react";

const MyWork = () => {
  return (
    <section
      className="bg-violet1 font-k2d p-3 pt-36"
      style={{ height: "80vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <h2 className="text-grey1 font-semibold text-4xl">My Works</h2>
        <p className="text-grey1 text-xl mt-4" style={{ maxWidth: "750px" }}>
          Here are a handful of previous websites I've developed. Over the
          months I have developed some basic website projects. Eventually, I
          decided that it would be a fun challenge to design and build my own.
        </p>
      </div>
    </section>
  );
};

export default MyWork;
