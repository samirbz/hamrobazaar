import AdCard from "@/components/ui/cards/AdCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrductDetail = () => {
  return (
    <div className="mt-3 flex max-w-[1920px] justify-center ">
      <div className="flex w-[1320px] max-w-full px-3 max-md:pt-2 ">
        {/* Product  */}
        <div className="flex w-[362px] flex-col p-4">
          <div className="flex flex-col gap-6">
            <Image
              src="https://picsum.photos/id/2/331/270"
              width={331}
              height={270}
              alt="Image"
              className="rounded-lg"
            />
            <div className="flex items-center justify-between">
              <div className="flex  gap-4">
                <Image
                  src="https://picsum.photos/id/2/32/32"
                  width={32}
                  height={32}
                  alt="Image"
                  className="rounded-md"
                />
                <Image
                  src="https://picsum.photos/id/2/32/32"
                  width={32}
                  height={32}
                  alt="Image"
                  className="rounded-md"
                />
              </div>
              <span>Rs. 20000</span>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-sm">0 Views</span>
            <span className="text-[11px]">Like New</span>
          </div>
          <div className="my-4 flex h-[48px] items-start gap-4">
            <Image
              src="https://picsum.photos/id/200/40/40"
              width={40}
              height={40}
              alt="Image"
              className="rounded-full"
            />
            <div className="">
              <div className="flex items-center">
                <span className="mr-2">Sameer bajracharya</span>
                <div className="mr-3 h-4 w-px bg-black"></div>
                <span className="text-xs">7 Ads</span>
              </div>
              <div>
                <span className="ml-[6.4px] text-[13px] text-gray-400">
                  9803260827
                </span>
              </div>
            </div>
          </div>
          <div className=" h-px w-full bg-gray-300"></div>
          <div className="m-[14px] flex items-center p-[14px]">
            <span className="px-[14px]">Save</span>
            <div className="mr-3 h-4 w-px bg-black"></div>

            <span className="px-[14px]">Chat Now</span>
          </div>
          <span className="text-sm text-gray-500">
            Note: We recommend you to physically inspect the product/ Service
            before making payment. Avoid paying fees or advance payment to
            sellers. Click here for more details
          </span>
        </div>
        <div className="mx-[6px] h-screen w-px bg-gray-300"></div>

        {/* Product Detail  */}
        <div className="w-[538px] px-4">
          <h1 className="mb-[11px] mt-[20px] text-2xl font-semibold ">
            Macbook pro Apple laptop
          </h1>
          <div className="flex gap-4">
            <span className="pb-[11px] pl-[11px] pr-[5px]">Description</span>
            <span className="pb-[11px] pl-[11px] pr-[5px]">Comments</span>
            <span className="pb-[11px] pl-[11px] pr-[5px]">location</span>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-col">
              <span className="">9803260827</span>
              <span className="mb-4">Bike condition ramro xa</span>
            </div>
            <div className="my-[24px]">
              <span className="mb-[21px] text-[18px]">General</span>
              <div className="h-[222px] bg-[#FAF9FA]">
                <div className="flex gap-28">
                  <span>AD ID</span>
                  <span>HB-B8C71C</span>
                </div>

                <div className="flex gap-28">
                  <span>Location</span>
                  <span>All Core Lalitpur, Lalitpur</span>
                </div>
              </div>
              <Image
                src="/ad/ad-productdetail-down.jpeg"
                width={506}
                height={111}
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div className="mx-[6px] h-screen w-px bg-gray-300"></div>

        {/* Similar product  */}
        <div className="my-4 w-[362px] pl-4">
          <p>Similar Product</p>
          <div className="my-4 h-px w-full bg-gray-300"></div>
          <div className="flex gap-2">
            <AdCard />
            <AdCard />
          </div>
          <div className="mb-4 flex justify-center">
            <Image
              src="/ad/ad-productdetail.jpeg"
              width={250}
              height={250}
              alt="Image"
            />
          </div>
          <div className="flex gap-2">
            <AdCard />
            <AdCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrductDetail;
