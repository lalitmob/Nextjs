import { contact_ui as data } from "@/constant";
import React from "react";

const Contactform = () => {
  return (
    <div className="absolute right-[15%] overflow-hidden px-8 top-[16%]  w-[500px] h-[650px] bg-white-1 text-black-1 py-16 rounded-xl shadow-lg shadow-black-1 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-start">
          <label>{data.fields.name.label}</label>
          <input
            type={data.fields.name.type}
            className="border w-[80%] px-5 py-2 focus:outline-none focus:border-green-700 rounded-2xl"
            placeholder={data.fields.name.placeholder}
          />
        </div>
        <div className="relative flex w-[50%] gap-3 flex-col">
          <label>{data.fields.subject.label}</label>
          <select className=" border relative text-gray-600 w-full px-3 py-2 focus:outline-none focus:border-green-700 r appearance-none bg-white-1  rounded-full">
            {data.fields.subject.options.map((fields, id) => (
              <option className="text-gray-500" key={id} value={fields}>
                {fields}
              </option>
            ))}
          </select>
          <i className="bx bx-chevron-down absolute right-3 top-14 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <div className="flex flex-col justify-start gap-3 items-start">
          <label>{data.fields.email.label}</label>
          <input
            type={data.fields.email.type}
            className="border px-5 py-2 focus:outline-none focus:border-green-700 rounded-2xl"
            placeholder={data.fields.email.placeholder}
          />
        </div>
        <div className="flex flex-col justify-start gap-3 w-full h-[250px] items-start">
          <label>{data.fields.message.label}</label>
          <textarea
            className="border px-5 py-2 focus:outline-none w-full min-h-[200px] focus:border-green-700 rounded-xl"
            placeholder={data.fields.message.placeholder}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 mt-5">
          <input type="checkbox" />
          <label className="text-sm font-semibold text-gray-600">
            {data.ui.checkbox.label}
          </label>
        </div>
        <div className="mt-3">
          <button className="border px-8 py-2 rounded-2xl bg-green-400 focus:bg-green-800 hover:bg-green-600 ">{data.ui.button.text}</button>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
