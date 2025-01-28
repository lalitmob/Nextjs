"use client";
import Image from "next/image";
import { free_sample as data, uiConstant } from "@/constant";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Authenticationpage from "../components/Authenticationpage";
import Clientpage from "../components/Clientpage";
import Contact from "../components/Contact";
const page = () => {
  return (
    <div className="w-full ">
      <div>
        <div className="w-full bg-purple-600 h-screen relative z-0">
          <Image
            src={uiConstant.background_image}
            className="object-cover"
            alt={uiConstant.background_image}
            fill
          />
        </div>
        <div className="top-5 w-full absolute z-10">
          <Landing />
          <div className="flex mt-8 justify-center">
            <button className="border py-4 px-5 text-xl rounded-2xl bg-blue-500 transition-all duration-300 hover:text-black-4 hover:bg-green-300">
              {uiConstant.buttonName}
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-blue-950 h-[400px]">
        <div>
          <Image
            src={data.bg_image}
            alt="free_Sample"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {
            <div className="w-[600px] flex flex-col gap-5 text-white-1 absolute text-center">
              <h3 className="font-semibold text-xl">{data.heading}</h3>
              <h1  className="text-3xl font-bold">{data.subHeading}</h1>
              <p className="text-xl pb-8 ">{data.paragraph}</p>
            </div>
          }
        </div>
      </div>
      <Features/>
      <Authenticationpage/>
      <Clientpage/>
      <Contact/>
    </div>
  );
};

export default page;
