// components/Layout/Header.tsx
import React from "react";

const Card = (props: any) => {
  return (
    <div className=" bg-gray-100 flex justify-center items-center ">
      <div className="container  flex justify-center">
        <div className="max-w-sm ">
          <div className="bg-white z-1 relative  ">
            <img
              className="rounded-md "
              src="https://usustatesman.com/wp-content/uploads/2019/08/taylor-swift-lover-1050x1050.jpg"
              alt=""
            />
          </div>
          <div className="py-2 px-2  bg-[#F9F9F9] ">
            <h1 className="text-gray-700 font-bold text-md  hover:text-gray-900 hover:cursor-pointer">
              {props.props.name}
            </h1>
            <p className="text-gray-700 text-sm tracking-wide">
              by {props.props.artist}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
