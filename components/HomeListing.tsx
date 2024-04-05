import React from "react";
import HomeHeader from "./HomeHeader";
import TabContent from "./TabContent";
import GoTop from "./ui/btn/GoTop";

const HomeListing = () => {
  return (
    <div className="flex w-full flex-col px-4 max-lg:px-0 max-xs:px-0">
      <GoTop />
      <HomeHeader />
      <div className="h-px w-full bg-gray-300"></div>
      <div className="pt-4">
        <TabContent />
      </div>
    </div>
  );
};

export default HomeListing;
