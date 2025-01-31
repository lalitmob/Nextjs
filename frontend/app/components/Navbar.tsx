import React, { useContext, useState } from "react";
import { navigational_names } from "../../constant/index";
import { modelContext } from "@/context/Modelprovider";
const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const context = useContext(modelContext);

  if (!context) {
    return null;
  }

  const { handlescroll } = context;
  return (
    <div>
      {displayMenu && (
        <div className="absolute w-full h-screen z-30 md:z-0  bg-gray-950/70 overflow-hidden"></div>
      )}
      <div className=" md:hidden absolute z-40 p-5">
        {displayMenu ? (
          <div className="flex flex-col justify-start items-start gap-3 text-white-1">
            <i
              onClick={() => setDisplayMenu(false)}
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
        ) : (
          <i
            onClick={() => setDisplayMenu(true)}
            className="bx bx-caret-right text-2xl transition-all duration-300"
          ></i>
        )}
      </div>

      <div className=" hidden md:flex absolute z-20 top-10 w-full">
        <div className="flex justify-center w-full gap-8">
          {navigational_names.map((field, id) => (
            <button
              onClick={() => handlescroll(field )}
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
