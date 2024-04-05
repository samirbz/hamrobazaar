import Image from "next/image";
import React from "react";
import SidebarList from "./ui/SidebarList";

const Sidebar = () => {
  return (
    <div className="sticky top-20 z-20 h-screen w-full overflow-hidden whitespace-nowrap ">
      {/* SIDEBAR HEADER  */}
      <div className=" sticky top-0 z-20 bg-white">
        <div className="flex h-[48px] items-center px-2">
          <Image
            src="/icons/menu.svg"
            width={24}
            height={24}
            alt="menu"
            className="mr-2 size-[24px]"
          />
          <h2 className="font-medium">Category</h2>
        </div>
        {/* Horizontal line  */}
        <div className="my-[6px] h-px bg-gray-200"></div>
      </div>

      {/* SIDEBAR LIST  */}
      <div className="hideScrollbar h-[82vh] w-full overflow-y-scroll">
        <SidebarList />
      </div>
    </div>
  );
};

export default Sidebar;
