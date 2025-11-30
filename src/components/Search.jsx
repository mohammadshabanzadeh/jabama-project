import React, { useContext } from "react";
import CityDropdown from "./CityDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceDropdown from "./PriceDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

function Search() {
  const { handleClick } = useContext(HouseContext);

  return (
    <div
      className="text-gray-100 px-[30px] py-6 lg:w-[1170px] max-w-[1170] mx-10 lg:mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent
    lg:backdrop-blur rounded-xl"
    >
      <CityDropdown />
      <PropertyDropdown />
      <PriceDropdown />
      <button
        className="bg-red-500 hover:bg-red-600 transition w-full flex
      lg:lg:max-w-[162px] h-16 rounded-lg justify-center items-center text-lg"
        onClick={() => handleClick()}
      >
        <RiSearch2Line />
      </button>
    </div>
  );
}

export default Search;
