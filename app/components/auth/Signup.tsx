import { authentication_ui } from "@/constant";
import React from "react";

const Signup = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex relative flex-col justify-center items-center gap-10">
          <div className="flex flex-col w-full gap-5 px-2">
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none   focus:border-green-600 w-[100%] h-[50px] rounded-full px-5"
              placeholder={authentication_ui.placeholders.email}
            />
            <input
              type="text"
              className="border-2 border-gray-300  focus:outline-none focus:border-green-600 w-[100%] h-[50px] rounded-full px-5"
              placeholder={authentication_ui.placeholders.password}
            />
          </div>
          <button className="py-3 px-28 rounded-3xl border-2 bg-green-300">
            {authentication_ui.ui_button_name.createAccount}
          </button>
          <div className="border relative w-[90%] z-0 border-gray-600">
            <span className="absolute left-[50%] -top-[10] z-[2] bg-white-1 text-sm font-semibold">
              OR
            </span>
          </div>
          <button className="py-3 px-28 rounded-3xl border-2 bg-blue-300">
            {authentication_ui.ui_button_name.signup_github}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
