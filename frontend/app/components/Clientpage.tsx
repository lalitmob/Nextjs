import { client_page_data as client } from "@/constant";
import Image from "next/image";
import React from "react";

const Clientpage = () => {
  return (
    <div className="relative flex justify-center items-center bg-blue-700 h-screen w-full">
      <div className="absolute top-[20%] px-20 text-white-1">
        <h1 className="text-6xl font-bold mb-8 text-white-5">Our happy clients</h1>
        <div className="flex flex-wrap   w-[1100px] gap-8">
          {client.map((data, id) => (
            <div key={id} className="flex border w-[500px] rounded-xl border-gray-400 gap-8 p-3 h-[200px]">
              <div>
                <Image src={data.image} alt="userpic" width={200} height={200} />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg">{data.about}</p>
                <h4 className="text-sm capitalize text-gray-300">{data.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientpage;
