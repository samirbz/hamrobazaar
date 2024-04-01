import React from "react";
import SavedBtn from "./ui/SavedBtn";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="relative flex h-[48px] w-full items-center justify-between overflow-hidden max-md:h-[35px] ">
      <div className="mr-4 pl-4 max-md:pl-0">
        <h2 className="min-w-[116px] max-lg:hidden">Top Categories</h2>
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="menu icon"
          className="min-w-[24px] lg:hidden"
        />
      </div>
      <div className="hideScrollbar absolute left-[150px] w-[68%] overflow-x-scroll whitespace-nowrap max-lg:left-[50px] max-md:left-[30px] max-sm:w-full">
        <button className="topCategories-btn">Electronics, TVs, & More</button>
        <button className="topCategories-btn">
          Mobile Phones & Accessories
        </button>
        <button className="topCategories-btn">
          Mobile Phones & Accessories
        </button>
        <button className="topCategories-btn">
          Want To Buy (Buyer&apos;s List)
        </button>
        <button className="topCategories-btn">Business & Industrial</button>
      </div>
      <div className="mr-3 max-sm:hidden">
        <SavedBtn />
      </div>
    </div>
  );
};

export default TopCategories;
