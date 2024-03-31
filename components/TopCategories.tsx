import React from "react";
import SavedBtn from "./ui/SavedBtn";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="flex h-[48px] items-center justify-between ">
      <div className="mr-4 pl-4">
        <h2 className="min-w-[116px] max-lg:hidden">Top Categories</h2>
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="menu icon"
          className="min-w-[24px] lg:hidden"
        />
      </div>
      <div className="">
        <button className="topCategories-btn">Category menu</button>
      </div>
      <div className="mr-3">
        <SavedBtn />
      </div>
    </div>
  );
};

export default TopCategories;
