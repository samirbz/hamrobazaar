import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-20 max-w-[1903px] justify-center bg-white max-sm:h-[4.6rem] max-sm:py-3">
      <div className="flex w-[1320px] max-w-full  items-center px-3">
        {/* full logo  */}
        <div className="mr-[4.5rem] max-lg:hidden lg:min-h-[23.578] lg:min-w-[180px] xl:min-h-[26px] xl:min-w-[200px]">
          <Image
            src="images/full-logo.svg"
            width={200}
            height={26.2}
            alt="full logo"
          />
        </div>
        <div className="min-h-[36px] min-w-[36px] max-md:mr-3 md:mr-[4.5rem] lg:hidden">
          <Image
            src="images/half-logo.svg"
            width={36}
            height={36}
            alt="full logo"
          />
        </div>
        {/* Half logo  */}
        <div className="rounded-lg border border-black px-[2px]  max-md:mr-[16px] max-md:w-[27rem]  max-sm:mr-0 max-sm:w-full md:mr-[44px] md:w-[37rem]">
          <form className="relative w-full">
            <div className="flex size-full rounded-lg border-none outline-none">
              <input
                type="search"
                placeholder="Search for anything"
                className="inline-block size-full rounded-lg border-none py-[11px] pb-[10px] text-sm outline-none max-md:px-[10px] max-sm:text-[13px] md:px-2"
              />
              <button
                type="submit"
                className="cursor-pointer border-none px-[6px] outline-none"
              >
                <Image
                  src="icons/search.svg"
                  width={16}
                  height={16}
                  alt="full logo"
                  className="mr-[2px] mt-[4px] "
                />
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center max-sm:hidden">
          <button className="group flex h-[40px] w-[124px] items-center gap-2 whitespace-nowrap rounded-md border border-black bg-black p-2 text-xs text-white hover:bg-white hover:text-black max-md:mr-[12px] md:mr-[26px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white transition-colors duration-300 group-hover:text-black"
            >
              <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"></path>
            </svg>
            <span className="ml-px mt-px">Post for free</span>
          </button>

          <div className="mr-[1.625rem] h-0 w-6 rotate-90 border border-black max-md:mr-3"></div>
          <div className="mr-2 mt-px w-[80px] px-2 py-[6.4px] text-sm hover:text-blue-400 max-md:flex max-md:justify-center max-md:rounded-md max-md:border max-md:border-black">
            Login
          </div>
          <div className="mr-2 flex h-[35.78px] w-20 justify-center whitespace-nowrap rounded-md border border-black px-2 py-[6.4px] text-sm hover:bg-black hover:text-white max-md:hidden">
            <span className="mt-px ">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
