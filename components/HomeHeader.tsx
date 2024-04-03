import React from "react";

const HomeHeader = () => {
  return (
    <div className="sticky top-20 z-10 flex h-12 w-full items-center gap-10 bg-white max-md:top-[120px] max-sm:top-[112.5px] max-xs:gap-1">
      <div className="mb-[3px]  flex pb-[7px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M14.75 22.5H8.75C3.32 22.5 1 20.18 1 14.75V8.75C1 3.32 3.32 1 8.75 1H14.75C20.18 1 22.5 3.32 22.5 8.75V14.75C22.5 20.18 20.18 22.5 14.75 22.5ZM8.75 2.5C4.14 2.5 2.5 4.14 2.5 8.75V14.75C2.5 19.36 4.14 21 8.75 21H14.75C19.36 21 21 19.36 21 14.75V8.75C21 4.14 19.36 2.5 14.75 2.5H8.75Z"
            fill="#D5DBDB"
          ></path>
          <path
            d="M12 13V7M12 7L10 9M12 7L14 9"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 17H12.1739L16 17"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h3 className="">
          Latest <span className="max-md:hidden">Uploads</span>
        </h3>
      </div>
      <div className="mb-[3px] flex pb-[7px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M9 15.2318L10.9682 16.6486C11.2249 16.8867 11.7995 17 12.1785 17H14.599C15.3569 17 16.1882 16.4673 16.3838 15.7646L17.9119 11.4688C18.2298 10.6414 17.6552 9.9387 16.7017 9.9387H14.1589C13.7799 9.9387 13.4621 9.644 13.5232 9.23597L13.8411 7.35446C13.9633 6.82175 13.5843 6.23236 13.0098 6.06235C12.4963 5.881 11.8606 6.11902 11.6161 6.47038L9.01223 10.0634"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M6 14.8798V9.12023C6 8.2942 6.35769 8 7.2 8H7.8C8.64231 8 9 8.2942 9 9.12023V14.8798C9 15.7058 8.64231 16 7.8 16H7.2C6.35769 16 6 15.7058 6 14.8798V14.8798Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.75 22.5H8.75C3.32 22.5 1 20.18 1 14.75V8.75C1 3.32 3.32 1 8.75 1H14.75C20.18 1 22.5 3.32 22.5 8.75V14.75C22.5 20.18 20.18 22.5 14.75 22.5ZM8.75 2.5C4.14 2.5 2.5 4.14 2.5 8.75V14.75C2.5 19.36 4.14 21 8.75 21H14.75C19.36 21 21 19.36 21 14.75V8.75C21 4.14 19.36 2.5 14.75 2.5H8.75Z"
            fill="#D5DBDB"
          ></path>
        </svg>
        <h3>Recommended</h3>
      </div>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[.48rem] ml-auto size-6 cursor-pointer"
      >
        <title>Linear view</title>
        <path
          d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52ZM22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52ZM10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default HomeHeader;
