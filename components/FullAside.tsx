import React from "react";
import TopCategories from "./TopCategories";
import Trending from "./Trending";
import HomeListing from "./HomeListing";
import RightAd from "./RightAd";

const FullAside = () => {
  return (
    <div className="flex w-full flex-wrap items-start max-lg:w-[81%] max-sm:w-full">
      <div className="flex w-full flex-col">
        <div className="max-md:hidden">
          <TopCategories />
        </div>
        <div className="my-[6px] h-px w-full bg-gray-200"></div>
        <Trending />
        <div className="my-4 h-px w-full bg-gray-200"></div>
        <div className="flex">
          <HomeListing />
          <div className="h-screen w-px bg-gray-300 max-xl:hidden"></div>
          <RightAd />
        </div>
      </div>
    </div>
  );
};

export default FullAside;
