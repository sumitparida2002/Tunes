// components/Layout/Header.tsx
import React from "react";
import Header from "../components/Layout/Header";

const Profile = (props: any) => {
  return (
    <div className="px-12">
      <div className="flex space-x-6 py-8  items-end">
        <img
          src="https://usustatesman.com/wp-content/uploads/2019/08/taylor-swift-lover-1050x1050.jpg"
          alt=""
          className="h-[250px] shadow-lg"
        />
        <div className="mb-2 space-y-4">
          <h1 className="text-6xl font-bold">Cruel Summer</h1>
          <p className="text-md ml-2">Taylor Swift</p>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1BD760"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#1BD760"
            className="w-[4em] h-[4em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#000000"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[2.5em] h-[2.5em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="">
          <div className="header justify-between text-sm flex w-[100%] mt-[1em] p-2 pt-0 border-b-[1px]">
            <div className="flex space-x-[2em]">
              <p>#</p>
              <p>Title</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="header justify-between text-md flex w-[100%] mt-[1em] p-2 pt-0 ">
            <div className="flex space-x-[2em]">
              <p>1</p>
              <p className="font-medium">Cruel Summer</p>
            </div>
            <p>3:28</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold my-[4em]">
          More by Taylor Swift
        </h1>
      </div>
    </div>
  );
};

export default Profile;
