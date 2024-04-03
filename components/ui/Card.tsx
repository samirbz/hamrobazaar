import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex h-[250] w-[146px] cursor-pointer flex-col gap-3 rounded-md p-2 transition-all duration-700 hover:rounded-lg hover:border hover:border-[#0170b4] hover:bg-[rgba(1,112,180,.08)]">
      <Image
        src="https://picsum.photos/130/122"
        width={130}
        height={122}
        alt="image"
        className="rounded-md"
      />
      <div className="flex">
        <h3 className="text-[13px] font-semibold leading-4">
          Land Cruiser prado
        </h3>

        <span>
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
        </span>
      </div>
      <p className="text-xs">Used</p>
      <div className="flex gap-2">
        <h2 className="text-sm font-semibold">Rs.1,70,00,000</h2>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2133 1.33333H4.78667C3.36667 1.33333 2.21333 2.49333 2.21333 3.90667V13.3C2.21333 14.5 3.07333 15.0067 4.12667 14.4267L7.38 12.62C7.72667 12.4267 8.28667 12.4267 8.62667 12.62L11.88 14.4267C12.9333 15.0133 13.7933 14.5067 13.7933 13.3V3.90667C13.7867 2.49333 12.6333 1.33333 11.2133 1.33333Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.66667 7.1H6.33333M8 5.47334V8.80667"
            stroke="black"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
