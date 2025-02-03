"use client";
import Image from "next/image";
import { free_sample as data, uiConstant } from "@/constant";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Authenticationpage from "../components/Authenticationpage";
import Clientpage from "../components/Clientpage";
import Contact from "../components/Contact";
import Plans from "../components/Plans";
import { useState, useEffect, useRef } from "react";
import Authmodel from "../components/models/Authmodel";

const Page: React.FC = () => {
  const [idx, setIdx] = useState<number>(0);
  const [model, setModel] = useState<boolean>(false);
  const modelref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const setModelhandle = (e: MouseEvent) => {
      if (modelref.current && !modelref.current.contains(e.target as Node)) {
        setModel(false);
      }
    };
    if (model) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", setModelhandle);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", setModelhandle);
    };
  }, [model]);


  return (
    <div className="w-full overflow-hidden">
      <div>
        <div className="w-full bg-purple-600 h-screen relative z-0">
          <Image
            src={uiConstant.background_image[idx]}
            className="object-cover"
            alt={uiConstant.background_image[idx]}
            fill
          />
        </div>
        <Authmodel model={model} modelref={modelref} />
        <div className="top-5 w-full absolute z-10">
          <Landing idx={idx} setIdx={setIdx} />
          <div className="flex mt-8 justify-center">
            <button
              onClick={() => setModel(true)}
              className="shadow-sm shadow-black-1 text-white-1 py-3 px-3 md:px-5 md:text-xl rounded-2xl bg-blue-500 transition-all duration-300 hover:text-black-4 hover:bg-green-300"
            >
              {uiConstant.buttonName}
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center w-full bg-blue-950 h-[400px]">
        <div>
          <Image
            src={data.bg_image}
            alt="free_Sample"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-[90%] md:w-full h-full justify-center items-center px-6 sm:px-8 md:px-6 lg:px-4">
          {
            <div className=" flex flex-col gap-5 text-white-1 absolute text-center px-6 sm:px-8 md:px-6 lg:px-4">
              <h3 className="font-semibold text-lg md:text-xl">
                {data.heading}
              </h3>
              <h1 className="text-xl md:text-3xl font-bold">
                {data.subHeading}
              </h1>
              <p className="text-lg md:text-xl pb-8 ">{data.paragraph}</p>
            </div>
          }
        </div>
      </div>

      <Features />
      <Authenticationpage/>
      <Clientpage/>
      <Contact/>
      <Plans/>
    </div>
  );
};

export default Page;
