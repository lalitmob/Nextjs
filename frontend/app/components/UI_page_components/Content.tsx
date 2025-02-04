'use client'
import { template } from "@/constant/Userpage";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      {template.data.map((data, id) => (
        <div key={id} className="rounded-xl bg-blue-200/30 border w-[350px] h-auto min-h-[330px] pb-5">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <iframe
              src={data.image}
              title={data.name}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
          <div className="mb-2 w-full px-2 pt-2">
            <h4 className="text-sm text-gray-600">Admin & Dashboard</h4>
          </div>
          <div className="w-full px-2 font-bold ">
            <h3 className="">{data.name}</h3>
            <p>{data.price}</p>
          </div>
          <div className="flex gap-3 w-full  px-4 font-bold mt-3">
            <button className="px-3 bg-white-1 w-[10rem] py-2 border rounded-xl text-sm shadow-lg text-blue-400">Template Details</button>
            <button onClick={()=> {return window.location.href = data.image}} className="px-3 bg-white-1 w-[10rem]  py-2 border rounded-xl text-sm shadow-lg">Live preview</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
