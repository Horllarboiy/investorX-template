import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav style={{ background: `#0E141C` }} className="text-white py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Investor X</h1>
        <ul className="md:flex hidden peer-checked:block text-xl">
          <li className="mr-8">Home</li>
          <li className="mr-8">About</li>
          <li className="mr-8">Pages</li>
          <li className="mr-8">Portfolio</li>
          <li className="mr-8">Contact</li>
        </ul>
        <button onClick={handleClick} className="text-3xl transition-transform duration-150 ease-linear">
          {menu ? <CgClose /> : <HiMenuAlt4 />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
