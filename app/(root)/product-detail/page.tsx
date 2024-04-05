import React from "react";

const PrductDetail = () => {
  return (
    <div className="flex max-w-[1903px] justify-center">
      <div className="mt-3 flex w-[1296px] max-w-full">
        <div className="flex-[1.02] p-4">Aside</div>
        <div className="mx-[6px] h-screen w-px bg-gray-300"></div>
        <div className="flex-[1.6] px-4">product details</div>
        <div className="mx-[6px] h-screen w-px bg-gray-300"></div>
        <div className="my-4 flex-[1.1] pl-4 max-xl:hidden">
          <span>Similar Product</span>
          <div className="my-4 h-px  bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PrductDetail;
