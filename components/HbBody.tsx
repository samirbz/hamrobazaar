import React from "react";
import FullAside from "./FullAside";
import Sidebar from "./Sidebar";

const HbBody = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="h-full w-px bg-gray-300 max-md:hidden"></div>
      <FullAside />
    </div>
  );
};

export default HbBody;
