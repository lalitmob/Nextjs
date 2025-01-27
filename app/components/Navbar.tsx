import React, { useState } from "react";
import { navigational_names } from "../../constant/index";
const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  return (
    <div className="">
      <div className=" md:hidden absolute z-20 p-5">
        {displayMenu ? (
          <i
            onClick={() => setDisplayMenu(false)}
            className="bx bx-caret-right text-2xl transition-all duration-300"
          ></i>
        ) : (
          <div className="flex flex-col justify-start items-start gap-3 text-white-1">
            <i
              onClick={() => setDisplayMenu(true)}
              className="bx bx-caret-down text-2xl text-black-2 transition-all duration-300"
            />
            {navigational_names.map((field, id) => (
              <button
                className="capitalize transition-all duration-500 hover:text-orange-1 text-white-1"
                key={id}
              >
                {field}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className=" hidden md:flex absolute z-20 top-10 w-full">
        <div className="flex justify-center w-full gap-8">
          {navigational_names.map((field, id) => (
            <button
              className="capitalize transition-all duration-500 hover:text-orange-1 text-white-1"
              key={id}
            >
              {field}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
