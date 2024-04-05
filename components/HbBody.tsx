import React from "react";
import FullAside from "./FullAside";
import Sidebar from "./Sidebar";

const HbBody = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-[28%] shrink-0 max-md:hidden">
        <Sidebar />
      </div>
      <div className="h-full w-px bg-gray-300 max-md:hidden"></div>
      <div className="flex w-full shrink">
        <FullAside />
      </div>
    </div>
  );
};

export default HbBody;
