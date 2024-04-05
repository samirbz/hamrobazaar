import React from "react";
import Image from "next/image";

const sidebarItems = [
  {
    icon: "/icons/sidebarIcons/hbSelect.svg",
    title: "HB Select",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/appareal.svg",
    title: "Apparels & Accessories",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/automobiles.svg",
    title: "Automobiles",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/beauty.svg",
    title: "Beauty & Health",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/books.svg",
    title: "Books & Learning",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/business.svg",
    title: "Business & Industrial",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/computer.svg",
    title: "Computer & Peripherals",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/electronic.svg",
    title: "Electronics, TVs, & More",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/event.svg",
    title: "Events & Happenings",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/fresh.svg",
    title: "Fresh Veggies & Meat",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/furniture.svg",
    title: "Furnishing & Appliances",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/job.svg",
    title: "Jobs",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/mobile.svg",
    title: "Mobile Phones & Accessories",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/music.svg",
    title: "Musical Instruments",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/pet.svg",
    title: "Pets & Pet Care",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/pets.svg",
    title: "Pets for Adoption & Free Stuff",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/realState.svg",
    title: "Real Estate",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/service.svg",
    title: "Services",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/sport.svg",
    title: "Sports & Fitness",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/toy.svg",
    title: "Toys & Video Games",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/travel.svg",
    title: "Travel, Tours & Packages",
    count: "(9)",
  },
  {
    icon: "/icons/sidebarIcons/want.svg",
    title: "Want To Buy (Buyer's List)",
    count: "(9)",
  },

  // Add more sidebar items as needed
];

const SidebarList = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between pr-2 transition-all duration-300">
      {sidebarItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex w-full items-center justify-between p-2">
            <div className="flex h-[17px] items-center">
              <span className="mr-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </span>
              <div>
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-[10px]">{item.count}</span>
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
          {index !== sidebarItems.length && (
            <div className="my-[6px] h-px w-full bg-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SidebarList;
