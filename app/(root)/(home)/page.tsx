import HbBody from "@/components/HbBody";
import TopBanner from "@/components/TopBanner";
import React from "react";
export default function Home() {
  return (
    <div className="flex max-w-[1903px] justify-center ">
      <div className="flex w-[1320px] flex-col px-3">
        <TopBanner />
        <HbBody />
      </div>
    </div>
  );
}
