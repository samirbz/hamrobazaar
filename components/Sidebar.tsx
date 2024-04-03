import Image from "next/image";
import React from "react";
import SidebarList from "./ui/SidebarList";

const Sidebar = () => {
  return (
    <div className="h-fit w-[39%] max-md:hidden">
      {/* SIDEBAR HEADER  */}
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

      {/* SIDEBAR LIST  */}
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
      <SidebarList />
    </div>
  );
};

export default Sidebar;
