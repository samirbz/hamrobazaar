"use client";
import React, { useRef, useState, MouseEvent } from "react";
import SavedBtn from "./ui/SavedBtn";
import Image from "next/image";

const TopCategories: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity here
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative flex h-[48px] w-full items-center justify-between overflow-hidden max-md:h-[35px] ">
      <div className="mr-4 pl-4 max-md:pl-0">
        <h2 className="min-w-[116px] max-lg:hidden">Top Categories</h2>
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="menu icon"
          className="min-w-[24px] lg:hidden"
        />
      </div>
      <div
        ref={containerRef}
        className="hideScrollbar absolute left-[150px] w-[68%] select-none overflow-x-scroll whitespace-nowrap max-lg:left-[50px] max-md:left-[30px] max-sm:w-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <button className="topCategories-btn">Electronics, TVs, & More</button>
        <button className="topCategories-btn">
          Mobile Phones & Accessories
        </button>
        <button className="topCategories-btn">
          Mobile Phones & Accessories
        </button>
        <button className="topCategories-btn">
          Want To Buy (Buyer&apos;s List)
        </button>
        <button className="topCategories-btn">Business & Industrial</button>
      </div>
      <div className="mr-3 max-sm:hidden">
        <SavedBtn />
      </div>
    </div>
  );
};

export default TopCategories;
