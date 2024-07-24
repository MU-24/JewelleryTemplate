import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Backpack = () => {
  return (
    <div className=" mb-10">
      <div>
        <Section1 />
      </div>
      <div className=" flex flex-col-reverse lg:flex-row mx-4 lg:mx-4 mt-10 lg:mt-14 xl:mx-8 gap-10">
        <div className=" lg:w-1/4 "><Section2/></div>
        <div className="lg:w-3/4 "><Section3/></div>
      </div>
    </div>
  );
};

export default Backpack;
