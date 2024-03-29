import Image from "next/image";
import React from "react";

const TopCategories = () => {
  return (
    <div className="flex max-w-[1903px] flex-col justify-center">
      <div className=" flex w-full max-w-[1320px] items-center gap-4">
        <Image
          src="/icons/menu.svg"
          width={22.5}
          height={22.5}
          alt="menu"
          className="size-[22.5px]"
        />
        <div className="hideScrollbar flex overflow-x-scroll">
          <div className="flex gap-4 whitespace-nowrap text-sm">
            <button className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5">
              Electronics, TVs, & More
            </button>
            <button className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5">
              Mobile Phone & Accessories
            </button>
            <button className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5">
              Mobile Phones & Accessories
            </button>
            <button className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5">
              Want To Buy (Buyer&apos;s List)
            </button>
            <button className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5">
              Business & Industrial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
