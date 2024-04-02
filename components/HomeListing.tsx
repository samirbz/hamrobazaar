import React from "react";
import HomeHeader from "./HomeHeader";
import TabContent from "./TabContent";

const HomeListing = () => {
  return (
    <div className="flex w-full flex-col px-4 max-xs:px-0">
      <HomeHeader />
      <div className="h-px w-full bg-gray-300"></div>
      <TabContent />
    </div>
  );
};

export default HomeListing;
