import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[80px] items-center  px-2">
        <Image
          src="/images/full-logo.svg"
          width={218.856}
          height={28.683}
          alt="full logo"
          className="mr-[4.5rem]"
        />
        <div className="mr-11 flex h-10 w-[37rem] items-center rounded-lg border border-black">
          <input
            type="text"
            placeholder="Search for anything"
            className=" size-full rounded-lg border-none px-2 text-sm"
          />
          <button className="px-2">
            <Image
              src="/icons/search.svg"
              width={16}
              height={16}
              alt="search button"
            />
          </button>
        </div>
        <div className="pointer-events-auto relative flex items-center justify-end ">
          <button className="mr-[1.625rem] flex items-center rounded-md border border-black bg-black p-2 text-xs text-white">
            <Image
              src="/icons/plus.svg"
              width={24}
              height={24}
              alt="search button"
            />
            <span className="ml-[6px] mr-[3px]">Post for free</span>
          </button>
          <div className="mr-[1.625rem] h-0 w-6 rotate-90 border border-black"></div>
          <div className="flex items-center justify-between">
            <button className="flex w-20 items-center justify-start border-none px-[0.4rem] py-2 outline-none">
              Login
            </button>
            <button className="w-20 cursor-pointer rounded-md border border-black p-2 px-[0.4rem] py-[6.4px] text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
