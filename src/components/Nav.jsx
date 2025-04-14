import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <nav className="bg-[#0E141C]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Investor X
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          onClick={handleClick}
          type="button"
          className="inline-flex items-center p-2  justify-center text-3xl text-gray-300 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          {menu ? <CgClose /> : <HiMenuAlt4 />}
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            className={`${
              menu ? `absolute` : `hidden`
            } bg-[#0E141C] opacity-95 w-full left-0 md:w-auto text-xl md:flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
          >
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0"
              >
                Portfolo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
