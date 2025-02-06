"use client";
import { template } from "@/constant/Userpage";
import { triggerContext } from "@/context/Triggerprovider";
import React, { useContext } from "react";

const Content = () => {
  const context = useContext(triggerContext);
   if(!context){
    throw new Error("context must be used with in trigger provider")
   }
   const {listView} = context

  return (
    <div className={`flex ${listView ? "flex-col" : "flex-wrap"} gap-5`}>
      {template.data.map((data, id) => (
        <div
          key={id}
          className={`rounded-xl bg-blue-200/30 border ${
            listView ? "w-[90%] h-[40%] flex" : "h-auto min-h-[330px] w-[350px]"
          }  `}
        >
          <div className="relative w-full aspect-video">
            <iframe
              src={data.image}
              title={data.name}
              className="absolute top-0 left-0 w-full h-full border-none"
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <div
              className={`w-full px-2 pt-2 ${
                listView && "flex items-center justify-between"
              } pr-5`}
            >
              <div className="">
                <h4 className="text-sm text-gray-600">Admin & Dashboard</h4>
                <h3 className={`${listView && "text-xl"} font-bold`}>{data.name}</h3>
              </div>
              <div className={`${listView&&"text-xl text-bold"}`}>
                <p>{data.price}</p>
              </div>
            </div>
            <div className={`flex gap-3 w-full px-4 pb-5 font-bold mt-3`}>
              <button className="px-3 w-full py-2 border rounded-xl text-sm shadow-lg text-blue-400">
                Template Details
              </button>
              <button
                onClick={() => {
                  window.location.href = data.image;
                }}
                className="px-3 w-full py-2 border rounded-xl text-sm shadow-lg"
              >
                Live preview
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
