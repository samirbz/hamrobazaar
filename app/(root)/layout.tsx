import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <MobileNav />
    </div>
  );
};

export default Layout;
