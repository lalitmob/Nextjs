import { contact_page as data } from "@/constant";
import Image from "next/image";
import React from "react";
import Contactform from "./auth/Contactform";

const Contact = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="bg-blue-600 w-full h-screen">
        <Image
          src={data.bg_image}
          alt="bg_image"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 p-60 flex w-full h-screen ">
        <div className="w-[30%] flex flex-col text-white-1 gap-8">
          <h1 className="text-4xl font-bold">{data.heading}</h1>
          <p className="text-xl">{data.para}</p>
          <div className="flex flex-col gap-10">
            {data.contactInfo.map((d, id) => (
              <div key={id} className="flex gap-5 items-center">
                <i className={d.icon}></i>
                <p>{d.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Contactform/>
      </div>
    </div>
  );
};

export default Contact;
