import React, { useContext, useState } from 'react'
import { HouseContext } from './HouseContext';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiHome5Line } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function PropertyDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { property, setProperty, properties } = useContext(HouseContext);

  return (
    <Menu as="div" className="dropdown relative ">
      <MenuButton
        className="dropdown-btn w-full text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className="dropdown-icon-primary " />
        <div>
          <div className="text=[15px] font-medium leading-tight mr-4">{property}</div>
          <div className="text-[13px] mr-4">نوع ملک خود را انتخاب کنید </div>
        </div>
        {isOpen ? (
          <IoIosArrowUp className="dropdown-icon-secondary mr-2" />
        ) : (
          <IoIosArrowDown className="dropdown-icon-secondary mr-2" />
        )}
      </MenuButton>
      <MenuItems className="dropdown-menu">
        {properties.map((city, index) => {
          return (
            <MenuItem
              className="cursor-pointer rounded-full px-4 py-2 hover:bg-red-500 transition"
              key={index}
              as="li"
              onClick={() => {
                setProperty(city);
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

export default PropertyDropdown