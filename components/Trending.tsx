"use client";
import React from "react";
import Card from "./ui/Card";
import GoLeftRight from "./ui/GoLeftRight"; // Import the GoLeftRight component

const Trending = () => {
  return (
    <div className="group relative flex h-[303px] flex-col md:pl-4">
      {/* Render the GoLeftRight component */}
      <GoLeftRight />
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50002 15.251C7.31002 15.251 7.12002 15.181 6.97002 15.031C6.83054 14.8899 6.75232 14.6994 6.75232 14.501C6.75232 14.3026 6.83054 14.1121 6.97002 13.971L10.17 10.771C10.2474 10.6916 10.3416 10.6305 10.4456 10.5924C10.5497 10.5542 10.661 10.5399 10.7714 10.5504C10.8817 10.561 10.9883 10.5961 11.0833 10.6534C11.1782 10.7106 11.2591 10.7884 11.32 10.881L12.41 12.521L15.96 8.971C16.25 8.681 16.73 8.681 17.02 8.971C17.31 9.261 17.31 9.741 17.02 10.031L12.82 14.231C12.7427 14.3104 12.6485 14.3715 12.5444 14.4096C12.4403 14.4478 12.329 14.4622 12.2187 14.4516C12.1083 14.441 12.0017 14.4059 11.9068 14.3486C11.8118 14.2914 11.7309 14.2136 11.67 14.121L10.58 12.481L8.03002 15.031C7.88002 15.181 7.69002 15.251 7.50002 15.251V15.251Z"
              fill="black"
            ></path>
            <path
              d="M16.5 12.25C16.09 12.25 15.75 11.91 15.75 11.5V10.25H14.5C14.09 10.25 13.75 9.91 13.75 9.5C13.75 9.09 14.09 8.75 14.5 8.75H16.5C16.91 8.75 17.25 9.09 17.25 9.5V11.5C17.25 11.91 16.91 12.25 16.5 12.25Z"
              fill="black"
            ></path>
            <path
              d="M14.75 22.5H8.75C3.32 22.5 1 20.18 1 14.75V8.75C1 3.32 3.32 1 8.75 1H14.75C20.18 1 22.5 3.32 22.5 8.75V14.75C22.5 20.18 20.18 22.5 14.75 22.5ZM8.75 2.5C4.14 2.5 2.5 4.14 2.5 8.75V14.75C2.5 19.36 4.14 21 8.75 21H14.75C19.36 21 21 19.36 21 14.75V8.75C21 4.14 19.36 2.5 14.75 2.5H8.75Z"
              fill="#D5DBDB"
            ></path>
          </svg>
          <span className="font-medium">Trending</span>
        </div>
        <button className="px-4 py-[4.8px] font-medium text-blue-600">
          Boost Ads
        </button>
      </div>
      <div className="my-[6px] h-px bg-gray-300"></div>
      <div
        id="scrollableContainer"
        className="hideScrollbar absolute top-[55px] flex w-[98.3%] overflow-x-scroll"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Trending;
