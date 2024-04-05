import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-[1920px] justify-center">
      <div className="flex w-[1320px] max-w-full flex-col ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
