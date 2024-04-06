import React from "react";
import Image from "next/image";

const PrductDetail = () => {
  return (
    <div className="flex max-w-[1903px] justify-center">
      <div className="mt-3 flex w-[1296px] max-w-full">
        <div className="flex w-full ">
          <div className="w-[362px] p-4">
            <Image
              src="https://picsum.photos/331/270"
              width={331}
              height={270}
              alt="image"
              className="rounded-lg"
            />
          </div>
          <div className="mx-[6px] h-screen w-px bg-gray-300"></div>
          <div className="w-[538px] px-4 max-xl:w-full">
            <section>
              <div className="mb-3 mt-5">
                <h3 className="text-[22px] font-bold">Land Cruiser Prado</h3>
              </div>
              <div className="flex gap-4 pb-3 pl-3 pr-1">
                <div>Description</div>
                <div>Comments</div>
                <div>Location</div>
              </div>
              <div className="pt-4">
                <div>
                  <div>Land Cruiser Prado</div>
                </div>
                <div className="my-[24px]">
                  <h3 className="mb-[21px]">General</h3>
                  <div className=" bg-gray-300 px-[23px] py-[14px]">
                    <div>AD ID</div>
                    <div>Location</div>
                    <div>Delivery</div>
                    <div>Negotiable</div>
                    <div>Ads Posted</div>
                    <div>Ads Expiry</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mx-[6px] h-screen w-px bg-gray-300 max-xl:hidden"></div>
          <div className="my-4 pl-4 max-xl:hidden ">
            <span>Similar Product</span>
            <div className="my-4 h-px  bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrductDetail;
