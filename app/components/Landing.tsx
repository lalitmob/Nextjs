import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { homepage_content as data, homepage_content } from "@/constant";
const Landing = () => {
  const [idx, setIdx] = useState<number>(0);
  return (
    <div>
      <div className="flex justify-between">
        <i
          onClick={() => setIdx((prev) => (prev == 0 ? 0 : prev - 1))}
          className="bx bx-chevron-left text-white-1 self-center mt-40 text-6xl"
        ></i>
        <section className="flex-flex-col text-center p-5 text-white-1  mt-[200px] w-[736px] items-center">
          <h3 className="pb-5 text-xl font-semibold text-white-1">
            {data[idx].heading}
          </h3>
          <h1 className="text-6xl text-white-1 pb-5 font-bold">
            {data[idx].subheading}
          </h1>
          <p className="text-2xl pb-8 text-white-2">{data[idx].paragraph}</p>
        </section>
        <i
          onClick={() =>
            setIdx((prev) =>
              prev == data.length - 1 ? data.length - 1 : prev + 1
            )
          }
          className="bx bx-chevron-right text-white-1 self-center mt-40 text-6xl"
        ></i>
      </div>
      <div className="flex justify-center">
      {homepage_content.map((_, id) => {
          const isActive = idx == id;
          return (
              <div
               key={id}
               onClick={()=>setIdx(id)}
                className={cn(
                  "flex items-center ml-3 justify-center rounded-full",
                  { "bg-green-400": isActive, "bg-gray-200": !isActive }
                )}
              >
                <i className="bx bx-circle hover:cursor-pointer text-white-5 text-sm"></i>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
