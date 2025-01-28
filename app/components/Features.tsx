import { Features_content as d, uiConstant } from "@/constant";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const Features = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full bg-purple-700 h-full ">
        <Image
          src={uiConstant.feature_bg}
          alt={uiConstant.feature_bg}
          fill
          className="object-cover"
        />
      </div>
      <div className="">
        <div className="absolute flex  z-20 top-[15%] h-[700px] w-full bg-transparent ">
          <div className=" w-[50%] h-[400px]">
            <Image
              src={d[idx].image}
              alt={d[idx].image}
              height={500}
              width={700}
            />
          </div>
          <div className="flex flex-col mt-[10%]  w-[45%] text-white-1">
            <div className="flex flex-col gap-5 mb-10">
              <h1 className="text-6xl font-bold">{d[idx].heading}</h1>
              <p className="text-3xl text-white-2">{d[idx].para}</p>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-semibold ">{d[idx].contenthead1}</h4>
                <p>{d[idx].content1}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-semibold ">{d[idx].contenthead2}</h4>
                <p>{d[idx].content2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] right-5 flex flex-col gap-3 z-20">
          {d.map((_, id) => {
            const isActive = idx == id;
            return (
              <div
                key={id}
                onClick={() => setIdx(id)}
                className={cn(
                  "flex items-center ml-3 justify-end rounded-full",
                  { "bg-green-400": isActive, "bg-gray-200": !isActive }
                )}
              >
                <i className="bx bx-circle text-sm text-transparent"></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
