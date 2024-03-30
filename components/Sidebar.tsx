import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-[481px] w-[362px]">
      <div className="flex h-[48px] items-center px-2">
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="menu"
          className="mr-2 size-[24px]"
        />
        <div className="text-[16px] font-medium">Category</div>
      </div>
      <div className="my-[6px] h-px bg-gray-300"></div>
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
