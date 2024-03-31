import React from "react";
import TopCategories from "./TopCategories";
import Trending from "./Trending";

const FullAside = () => {
  return (
    <div className="full--aside">
      <div className="w-full">
        <div className="max-md:hidden">
          <TopCategories />
        </div>
        <div className="my-[6px] h-px w-full bg-gray-200"></div>
        <Trending />
        <div className="my-4 h-px w-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default FullAside;
