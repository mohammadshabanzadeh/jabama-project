import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

function House({ house }) {
  return (
    <div
      className="bg-white shadow-1 p-5 rounded-xl mt-16 mx-15 cursor-pointer
    hover:shadow-2xl transition md:mx-5 
    "
    >
      <img src={house.image} className="mb-8 rounded-md" />
      <div className="bg-gray-700 rounded-full text-white px-3 py-1 inline-block">
        {house.type}
      </div>
      <div className="bg-red-500 rounded-full text-white px-3 py-1 inline-block">
        {house.city}
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{house.address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className=" text-[20px] rounded-full">
            <BiBed />
          </div>
          <div className="text-base">{house.bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className=" text-[20px] rounded-full">
            <BiBath />
          </div>
          <div className="text-base">{house.bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className=" text-[20px] rounded-full">
            <BiArea />
          </div>
          <div className="text-base">{house.surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-red-500 mb-4">
        {house.price} تومان
      </div>
    </div>
  );
}
``;
export default House;
