import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import TopCategories from "@/components/TopCategories";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1903px]">
      <Navbar />
      <div className="sm:hidden">
        <div className="px-2">
          <TopCategories />
        </div>
        <div className="mt-[6px] h-px bg-gray-300"></div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
