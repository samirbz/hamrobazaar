import React from "react";

const SavedBtn = () => {
  return (
    <div className="group flex h-[40px] w-[124px] cursor-pointer items-center px-[33px] py-4 ">
      <div className="flex items-center gap-1.5 ">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black transition-colors duration-300 group-hover:text-blue-600"
        >
          <path
            d="M11.2133 1.33333H4.78667C3.36667 1.33333 2.21333 2.49333 2.21333 3.90667V13.3C2.21333 14.5 3.07333 15.0067 4.12667 14.4267L7.38 12.62C7.72667 12.4267 8.28667 12.4267 8.62667 12.62L11.88 14.4267C12.9333 15.0133 13.7933 14.5067 13.7933 13.3V3.90667C13.7867 2.49333 12.6333 1.33333 11.2133 1.33333Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.66667 7.1H6.33333M8 5.47334V8.80667"
            stroke="white"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>Saved</span>
      </div>
    </div>
  );
};

export default SavedBtn;
