import Advertise from "@/components/Advertise";
import Sidebar from "@/components/Sidebar";
import TopCategories from "@/components/TopCategories";
import React from "react";
export default function Home() {
  return (
    <main className="flex h-screen max-w-[1903px] items-start justify-center">
      <div className="w-full max-w-[1320px] px-3 max-sm:py-3">
        <Advertise />
        <div className="flex">
          <Sidebar />
          {/* Horizontal diveider  */}
          <div className="h-screen w-px bg-gray-300"></div>
          <div>
            <TopCategories />
            <div className="my-[6px] h-px  w-[932px]  bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
