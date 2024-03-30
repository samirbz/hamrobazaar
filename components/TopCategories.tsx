import React from "react";
import SavedBtn from "./ui/SavedBtn";

const TopCategories = () => {
  return (
    <div className="flex items-center  pl-4  ">
      <div className="flex items-center">
        <h2 className="whitespace-nowrap ">Top Categories</h2>

        <div className="hideScrollbar flex overflow-x-auto ">
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
          <button className="mr-2 shrink-0 rounded-md border border-gray-200 p-1">
            Electronics, TVs, & More
          </button>
        </div>
      </div>

      <div>
        <SavedBtn />
      </div>
    </div>
  );
};

export default TopCategories;
