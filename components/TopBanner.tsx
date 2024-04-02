import React from "react";
import Image from "next/image";
const TopBanner = () => {
  return (
    <div className="my-4 ">
      <Image
        src="/ad/1.gif"
        width={1296}
        height={120}
        alt="ad1"
        unoptimized
        className="mb-4 h-[120px] w-[1296px] max-xs:max-h-[55px]"
      />

      <Image
        src="/ad/2.jpg"
        width={1296}
        height={120}
        alt="ad1"
        className=" h-[120px] w-[1296px]  max-xs:max-h-[55px]"
      />
    </div>
  );
};

export default TopBanner;
