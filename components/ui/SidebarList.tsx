import React from "react";
import Image from "next/image";

const SidebarList = () => {
  return (
    <div className="pr-2">
      {/* HB Select  */}
      <div className="flex items-center justify-between p-2">
        <div className="flex h-[17px] items-center">
          <span className="mr-2">
            <Image
              src="/icons/hbSelect.svg"
              alt="HB Select"
              width={24}
              height={24}
            />
          </span>
          <div>
            <span className="text-sm font-medium">HB Select </span>
            <span className="text-[10px]">(9)</span>
          </div>
        </div>
        <svg
          width={7}
          height={13}
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M1 11.78L5.34667 7.43333C5.86 6.92 5.86 6.08 5.34667 5.56667L1 1.22"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="my-[6px] h-px w-full bg-gray-300"></div>
    </div>
  );
};

export default SidebarList;
