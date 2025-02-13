"use client";
import { triggerContext } from "@/context/Triggerprovider";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Content = () => {
  const context = useContext(triggerContext);
  const router = useRouter();
  if (!context) {
    throw new Error("context must be used with in trigger provider");
  }
  const {
    listView,
    contentData,
    filteredData,
    prompt,
    displayData,
    setDisplayData,
  } = context;
  useEffect(() => {
    setDisplayData(prompt ? filteredData : contentData);
  }, [prompt, contentData, filteredData, setDisplayData]);

  return (
    <div className={`flex ${listView ? "flex-col" : "flex-wrap"} gap-5`}>
      {displayData &&
        displayData.data.map((data, id) => (
          <div
            key={data.id}
            className={`rounded-xl relative bg-blue-200/30 border ${
              listView
                ? "w-[90%] h-[40%] flex"
                : "h-auto min-h-[330px] w-[350px]"
            }  `}
          >
            <div
              className="relative w-full aspect-video hover:cursor-pointer"
              onClick={() => router.push(`/ui_design/${id}`)}
            >
              <iframe
                src={data.image}
                title={data.name}
                className="absolute top-0 left-0 w-full h-full border-none"
              />
              {/* <div className="absolute hover:cursor-pointer opacity-0 hover:opacity-100 bg-black-1/80 transition-opacity duration-300 top-0 w-full h-full bg-black/50 flex items-center justify-center">
                <Link
                  className="border px-10 py-3 bg-blue-300 rounded-3xl"
                  href={`/ui_design/${id}`}
                >
                  Details
                </Link>
              </div> */}
            </div>
            <div className="w-full flex flex-col justify-between">
              <div
                className={`w-full px-2 pt-2 ${
                  listView && "flex items-center justify-between"
                } pr-5`}
              >
                <div className="">
                  <h4 className="text-sm text-gray-600">Admin & Dashboard</h4>
                  <h3 className={`${listView && "text-xl"} font-bold`}>
                    {data.name}
                  </h3>
                </div>
                <div className={`${listView && "text-xl text-bold"}`}>
                  <p>${data.price}</p>
                </div>
              </div>
              <div className={`flex gap-3 w-full px-4 pb-5 font-bold mt-3`}>
                <Link
                  href={`/ui_design/${data.id}`}
                  className="px-3 w-full py-2 border rounded-xl text-sm shadow-lg text-blue-400"
                >
                  Template Details
                </Link>
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
