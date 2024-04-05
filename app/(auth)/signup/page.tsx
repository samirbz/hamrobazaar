import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex h-[780px] gap-24 overflow-auto bg-[#fafafa] px-3 py-[48px] max-lg:h-full max-lg:flex-col-reverse max-lg:gap-[74px] max-lg:py-0 max-sm:pt-2">
      {/* Left Form  */}
      <div className="flex flex-col gap-12 ">
        <div className="max-lg:hidden">
          <Image
            alt="search box"
            src="/images/search.gif"
            width={764}
            height={430}
          />
        </div>
        <div className="max-md:hidden">
          <Image
            alt="playstore"
            src="/images/playstore.png"
            width={640}
            height={166}
          />
        </div>
      </div>

      {/* Right form  */}
      <div className="flex w-[440px] flex-col max-lg:w-full">
        <div className="flex flex-col">
          <div className="mb-[30px] sm:hidden">
            <Image
              alt="logo"
              src="/icons/half-login-logo.svg"
              width={30}
              height={30}
            />
          </div>
          <div className="mb-[32px] flex w-full items-center justify-between rounded-lg bg-[#eeeeee] p-4 max-sm:hidden max-sm:h-[79px] ">
            <div className="flex h-[92px] flex-col justify-center ">
              <h2 className="text-[19px] font-medium">Make a deal</h2>
              <span className="text-[16px] text-[#a5a5a5]">
                Welcome To Hamrobazar
              </span>
            </div>
            <Image
              src="/images/login-image.svg"
              alt="login image"
              width={140}
              height={92}
              className="max-sm:hidden"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between max-sm:items-center">
              <h2 className="text-[22px] font-medium">Sign Up</h2>
              <Image
                src="/images/login-image.svg"
                alt="login image"
                width={140}
                height={92}
                className="sm:hidden"
              />
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-[48px] rounded-lg border border-gray-300 px-[6.4px] py-3"
                  />
                  {/* <label className="mr-[6.4px] text-[13px] text-red-400">
                    Phone number is required
                  </label> */}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-[48px] rounded-lg border border-gray-300 px-[6.4px] py-3"
                  />
                  {/* <label className="mr-[6.4px] text-[13px] text-red-400">
                    Phone number is required
                  </label> */}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Password"
                    className="h-[48px] rounded-lg border border-gray-300 px-[6.4px] py-3"
                  />
                  {/* <label className="mr-[6.4px] text-[13px] text-red-400">
                    Password is required
                  </label> */}
                </div>
              </div>
              <div className="my-[32px] h-px w-full bg-gray-300"></div>
              <div className="flex flex-col gap-4">
                <div className=" flex gap-2 ">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="text-sm text-gray-400">
                    I hearby accept all the{" "}
                    <span className="text-black">Term & Conditions</span> of
                    Hamrobazar.
                  </label>
                </div>

                <button className="h-[48px] rounded-lg border border-gray-400 px-4 py-[3.2px]">
                  Sign Up
                </button>
                <div className="h-px w-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-9 ">
          <span className="my-[9px]  text-[13px]">
            Already have an account?
            <Link href="login" className="underline">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
