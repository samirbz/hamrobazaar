import React from "react";
import Image from "next/image";

const RightAd = () => {
  return (
    <div className="ml-4 mr-[20px] w-[520px] max-xl:hidden">
      <Image src="/images/right-ad1.png" height={334} width={334} alt="ad1" />
      <Image src="/images/right-ad2.png" height={334} width={334} alt="ad1" />
      <Image src="/images/right-ad3.png" height={334} width={334} alt="ad1" />
      <Image src="/images/right-ad4.png" height={334} width={334} alt="ad1" />
    </div>
  );
};

export default RightAd;
