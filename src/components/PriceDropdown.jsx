import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
function PriceDropdown() {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: " قیمت (همه)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full"
      >
        <MdOutlinePriceChange className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight mr-4">{price}</div>
          <div className="text-[13px] mr-4"> فیلتر محدوده قیمت </div>
        </div>
        {isOpen ? (
          <IoIosArrowUp className="dropdown-icon-secondary mr-4" />
        ) : (
          <IoIosArrowDown className="dropdown-icon-secondary mr-4" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setPrice(price.value)}
              key={index}
              className="cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PriceDropdown;
