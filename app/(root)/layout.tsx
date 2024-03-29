import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1903px] ">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
