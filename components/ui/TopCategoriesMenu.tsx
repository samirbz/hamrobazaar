import React from "react";
import Image from "next/image";
const TopCategoriesMenu = () => {
  return (
    <div className="flex max-w-[772px] flex-1 flex-nowrap items-center overflow-auto pr-2">
      <div>
        <Image
          src="/icons/menu.svg"
          width={22.5}
          height={22.5}
          alt="menu"
          className="size-[22.5px] md:hidden"
        />
        <div className="mr-4 whitespace-nowrap">Top Categories</div>
      </div>
      <div className="hideScrollbar flex w-full overflow-x-scroll whitespace-nowrap text-sm">
        <button className="mx-2 rounded-md border border-gray-200 px-4 py-1.5 ">
          Electronics, TVs, & More
        </button>
        <button className="mx-2 rounded-md border border-gray-200 px-4 py-1.5">
          Mobile Phones & Accessories
        </button>
        <button className="mx-2 rounded-md border border-gray-200 px-4 py-1.5">
          Mobile Phones & Accessories
        </button>
        <button className="mx-2 rounded-md border border-gray-200 px-4 py-1.5">
          Want To Buy (Buyer&apos;s List)
        </button>
        <button className="mx-2 rounded-md border border-gray-200 px-4 py-1.5">
          Business & Industrial
        </button>
      </div>
    </div>
  );
};

export default TopCategoriesMenu;
