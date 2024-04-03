import React from "react";
import Image from "next/image";

const Card2 = () => {
  return (
    <div className="flex min-w-[120px] flex-col gap-3 rounded-md   transition-all duration-500 ">
      <div className="flex w-full cursor-pointer justify-start gap-2.5 p-2 transition-all duration-700 hover:rounded-lg hover:border hover:border-[#0170b4] hover:bg-[rgba(1,112,180,.08)]">
        <div className="flex flex-col items-center">
          <div className="w-[130px] ">
            <Image
              src="https://picsum.photos/130/122"
              width={130}
              height={122}
              alt="image"
              className="rounded-md"
            />
          </div>
          <div className="mt-[6.4px] w-[24px]">
            <Image
              src="https://picsum.photos/130/122"
              width={24}
              height={22}
              alt="image"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full flex-col ">
          <div className="mb-[6px] flex  justify-between">
            <h3 className="text-[13px] font-semibold leading-4">
              Land Cruiser prado
            </h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 7.5C12.8285 7.5 13.5001 6.82843 13.5001 6C13.5001 5.17157 12.8285 4.5 12.0001 4.5C11.1717 4.5 10.5001 5.17157 10.5001 6C10.5001 6.82843 11.1717 7.5 12.0001 7.5Z"
                fill="black"
              ></path>
              <path
                d="M12.0001 13.5C12.8285 13.5 13.5001 12.8284 13.5001 12C13.5001 11.1716 12.8285 10.5 12.0001 10.5C11.1717 10.5 10.5001 11.1716 10.5001 12C10.5001 12.8284 11.1717 13.5 12.0001 13.5Z"
                fill="black"
              ></path>
              <path
                d="M12.0001 19.5C12.8285 19.5 13.5001 18.8284 13.5001 18C13.5001 17.1716 12.8285 16.5 12.0001 16.5C11.1717 16.5 10.5001 17.1716 10.5001 18C10.5001 18.8284 11.1717 19.5 12.0001 19.5Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <p className="mb-2 text-xs leading-7">Set ramro xa</p>
          <div className="mb-2 flex items-center gap-4">
            <div className="flex gap-2">
              <h2 className="text-sm font-semibold">Rs.1,70,000</h2>
            </div>
            <span className="text-xs">| Used</span>
          </div>
          <div className="mb-[11px] flex justify-between">
            <span className=" text-xs">Godawari, Hadegaun chowck</span>
            <span className="text-xs">1day ago</span>
          </div>
          <div className="mb-[11px] h-px w-full bg-gray-300"></div>

          <span className="text-xs">Sameer bajracharya</span>
        </div>
      </div>
      <div className="my-[15px] h-px w-full bg-gray-300 pl-2 pr-4"></div>
    </div>
  );
};

export default Card2;
