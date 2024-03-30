import React from "react";
import Sidebar from "./Sidebar";
import FullAside from "./FullAside";

const HbBody = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-px bg-gray-300"></div>
      <FullAside />
    </div>
  );
};

export default HbBody;
