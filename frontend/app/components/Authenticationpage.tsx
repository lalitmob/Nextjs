import React, { useState } from "react";
import Image from "next/image";
import {
  authentication_ui,
  AuthenticationPageContent,
  free_sample,
} from "@/constant";
import Signup from "./subcomponent/Signup";
import Signin from "./subcomponent/Signin";
const Authenticationpage = () => {
    const [selectauthcomponent, setSelectauthcomponent] = useState<boolean>(false)
  return (
    <div className="relative h-screen w-full ">
      <div className="bg-blue-500 w-full h-full">
        <Image
          src={free_sample.bg_image}
          fill
          alt="bg_image"
          className="object-cover"
        />
      </div>
      <div className="w-[40%] absolute top-[30%] ml-[10%] flex  text-white-1 ">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-6xl capitalize">
            {AuthenticationPageContent.h_content}
          </h1>
          <p className="">{AuthenticationPageContent.para}</p>
        </div>
      </div>
      <div  className="absolute right-[15%] top-[20%] w-[500px] h-[650px] bg-white-1 text-black-1 py-2 rounded-xl shadow-lg shadow-black-1 ">
        <div className="flex justify-between  h-[10%]   w-full">
          <div onClick={()=>setSelectauthcomponent(false)} className={`flex items-center justify-center w-[50%] border-b-2 ${selectauthcomponent?'': 'border-green-700'}`}>
            <button className="text-xl capitalize ">
              {authentication_ui.sign}
            </button>
          </div>
          <div onClick={()=>setSelectauthcomponent(true)} className={`flex items-center justify-center w-[50%] border-b-2 ${selectauthcomponent?'border-green-700': ''}`}>
            <button className="text-xl capitalize ">
              {authentication_ui.login}
            </button>
          </div>
        </div>
        <div className=" py-20 flex flex-col px-8 justify-center">
          {selectauthcomponent?<Signin />: <Signup/>}
        </div>
      </div>
    </div>
  );
};

export default Authenticationpage;
