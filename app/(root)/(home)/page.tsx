import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex h-screen max-w-[1903px] justify-center">
      <div className="w-full max-w-[1320px] px-[12px]">
        <div className="mt-4 ">
          <Image
            src="/ad/1.gif"
            width={1296}
            height={120}
            alt="ad1"
            className="mt-4 h-[120px] w-[1296px] max-md:h-[55px] max-sm:h-[120px]"
          />

          <Image
            src="/ad/2.jpg"
            width={1296}
            height={1}
            alt="ad1"
            className="mt-4 h-[120px] w-[1296px] max-md:h-[55px] max-sm:h-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
