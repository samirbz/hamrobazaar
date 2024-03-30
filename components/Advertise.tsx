import React from "react";
import Image from "next/image";
const Advertise = () => {
  return (
    <div>
      <div className="my-4">
        <Image
          src="/ad/1.gif"
          width={1296}
          height={120}
          alt="ad1"
          unoptimized
          className="mb-4 h-[120px] w-[1296px] max-md:h-[55px] max-sm:h-[120px]"
        />

        <Image
          src="/ad/2.jpg"
          width={1296}
          height={120}
          alt="ad1"
          className=" h-[120px] w-[1296px] max-md:h-[55px] max-sm:h-[120px]"
        />
      </div>
      <div className="mb-[6px] h-px bg-gray-300 sm:hidden"></div>
    </div>
  );
};

export default Advertise;
