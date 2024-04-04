"use client";
import React, { useState, useEffect } from "react";

const MobileNav = () => {
  const [showButton, setShowButton] = useState(true); // Initially set to true to show the button
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > prevScrollY) {
        // Scrolling down
        setShowButton(false); // Show the button when scrolling up
      } else {
        // Scrolling up
        setShowButton(true); // Hide the button when scrolling down
      }
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`fixed  bottom-0 z-10 flex w-full items-center justify-evenly bg-[#f0f0f0] p-[0.5em] max-xs:w-[308px] sm:hidden ${showButton ? "block" : "hidden"} `}
    >
      <svg width={21} height={20} viewBox="0 0 21 20" fill="none" className="">
        <path
          d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"
          fill="black"
        />
      </svg>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
          opacity="0.4"
          d="M8.5 10.5H15.5"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 18.43H11L15.45 21.39C15.6002 21.4901 15.7747 21.5476 15.955 21.5563C16.1353 21.5649 16.3145 21.5245 16.4736 21.4393C16.6328 21.3541 16.7658 21.2273 16.8585 21.0725C16.9512 20.9176 17.0001 20.7405 17 20.56V18.43C20 18.43 22 16.43 22 13.43V7.42999C22 4.42999 20 2.42999 17 2.42999H7C4 2.42999 2 4.42999 2 7.42999V13.43C2 16.43 4 18.43 7 18.43V18.43Z"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5867 0.666656H8.41333C3.56 0.666656 0.666667 3.55999 0.666667 8.41332V19.5733C0.666667 24.44 3.56 27.3333 8.41333 27.3333H19.5733C24.4267 27.3333 27.32 24.44 27.32 19.5867V8.41332C27.3333 3.55999 24.44 0.666656 19.5867 0.666656ZM19.3333 15H15V19.3333C15 19.88 14.5467 20.3333 14 20.3333C13.4533 20.3333 13 19.88 13 19.3333V15H8.66667C8.12 15 7.66667 14.5467 7.66667 14C7.66667 13.4533 8.12 13 8.66667 13H13V8.66666C13 8.11999 13.4533 7.66666 14 7.66666C14.5467 7.66666 15 8.11999 15 8.66666V13H19.3333C19.88 13 20.3333 13.4533 20.3333 14C20.3333 14.5467 19.88 15 19.3333 15Z"
          fill="black"
        />
      </svg>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M13.87 3.20101C12.6607 2.8566 11.3793 2.8566 10.17 3.20101C10.46 2.46101 11.18 1.94101 12.02 1.94101C12.86 1.94101 13.58 2.46101 13.87 3.20101V3.20101Z"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M15.02 19.059C15.02 20.709 13.67 22.059 12.02 22.059C11.2 22.059 10.44 21.719 9.9 21.179C9.33816 20.6163 9.0218 19.8542 9.02 19.059"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
  );
};

export default MobileNav;
