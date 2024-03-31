import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar max-md:hidden">
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
      <div className="my-[6px] h-px bg-gray-200"></div>
      <div>
        <div>HB Select</div>
        <div>Apparels & Accessories</div>
        <div>Automobiles</div>
        <div>HB Select</div>
        <div>Beauty & Health</div>
        <div>Books & Learning</div>
      </div>
    </div>
  );
};

export default Sidebar;
