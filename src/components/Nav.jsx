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
                href="/about"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={handleDropDown}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Pages
                <span>
                  {dropDown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </span>
              </button>

              <div
                id="dropdownNavbar"
                className={`z-40 md:absolute font-normal divide-y divide-gray-100 rounded-lg shadow-sm`}
              >
                <ul
                  className={`py-2 text-sm ${
                    dropDown ? `block` : `hidden`
                  } text-gray-300 `}
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
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
