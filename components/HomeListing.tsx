import React from "react";
import HomeHeader from "./HomeHeader";
import TabContent from "./TabContent";

const HomeListing = () => {
  return (
    <div className="flex w-full flex-col px-4">
      <HomeHeader />
      <TabContent />
    </div>
  );
};

export default HomeListing;
