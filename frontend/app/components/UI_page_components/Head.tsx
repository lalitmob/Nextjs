import { head } from "@/constant/Userpage";
import React from "react";

const Head = () => {
  return (
    <div className="grid grid-cols-[60%_40%] w-full ">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">{head.heading}</h1>
        <p className="text-lg text-gray-700">{head.para}</p>
      </div>
      <div className="flex justify-end  items-end gap-3  p-3 ">
        <div className="flex  h-full pt-12">
          <i className="bx bx-list-ul"></i>
          <i className="bx bx-grid-alt"></i>
        </div>

        <div className="relative flex w-[50%]  gap-1 flex-col">
          <label>{head.sort.name}</label>
          <select className=" border relative text-gray-600 w-full px-3 py-2 focus:outline-none focus:border-green-700  appearance-none bg-white-1  rounded-full">
            {head.sort.options.map((fields, id) => (
              <option className="text-gray-500" key={id} value={fields}>
                {fields}
              </option>
            ))}
          </select>
          <i className="bx bx-chevron-down absolute right-3 top-12 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Head;
