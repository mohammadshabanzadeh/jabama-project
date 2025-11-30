import React, { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HouseContext } from "./HouseContext";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function CityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { city, cities, setCity } = useContext(HouseContext);

  return (
    <Menu as="div" className="dropdown relative">
      <MenuButton
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaMapMarkerAlt className="dropdown-icon-primary" />
        <div>
          <div className="text=[15px] font-medium leading-tight mr-4">{city}</div>
          <div className="text-[13px]">انتخاب مقصد</div>
        </div>
        {isOpen ? (
          <IoIosArrowUp className="dropdown-icon-secondary mr-4" />
        ) : (
          <IoIosArrowDown className="dropdown-icon-secondary mr-4" />
        )}
      </MenuButton>
      <MenuItems className="dropdown-menu">
        {cities.map((city, index) => {
          return (
            <MenuItem
              className="cursor-pointer rounded-full px-4 py-2 hover:bg-red-500 transition"
              key={index}
              as="li"
              onClick={() => {
                setCity(city);
              }}
            >
              {city}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default CityDropdown;
