import Image from "next/image";
import React,{useContext} from "react";
import Card from "./subcomponent/Card";
import { plans_page } from "@/constant/index.js";
import { modelContext } from "@/context/Modelprovider";
const Plans : React.FC = () => {
   const { sectionRef } = useContext(modelContext)!;
  return (
    <div ref={sectionRef.pricing} data-name = "pricing" className="relative w-full h-screen">
      <div className="w-full h-full">
        <Image
          src={plans_page.bg_image}
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
      </div>
      <div className="absolute top-0 flex flex-col w-full mt-[8%] gap-16 text-white-1 items-center">
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold">{plans_page.heading}</h1>
            <p className="text-lg">{plans_page.sub_head_data}</p>
        </div>
        <div className="flex gap-20">
          <Card
            heading={plans_page.content1.heading}
            price={plans_page.content1.price}
            constant_data={plans_page.content1.constant_data}
            gray={plans_page?.content1?.gray_part}
          />
          <Card
            heading={plans_page.content2.heading}
            price={plans_page.content2.price}
            constant_data={plans_page.content2.constant_data}
            gray={plans_page?.content2?.gray_part}
          />
          <Card
            heading={plans_page.content3.heading}
            price={plans_page.content3.price}
            constant_data={plans_page.content3.constant_data}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Plans;
