"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { triggerContext } from "@/context/Triggerprovider";
import Comments from "@/app/components/UI_page_components/Comments";
interface dataItem {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  rating: number;
  reviews: number;
  livePreview: string;
  documentation: string;
  author: string;
}
const TemplateDetails = () => {
  const params = useParams();
  const { templateId } = params;
  const context = useContext(triggerContext);
  const [details, setDetails] = useState<dataItem | null>(null);
  if (!context) {
    throw new Error("context must be used with in trigger provider");
  }
  const { contentData } = context;
  useEffect(() => {
    if (contentData) {
      const response = contentData?.data.find(
        (item) => item.id === Number(templateId)
      );
      setDetails(response ?? null);
    }
    console.log("details", details);
  }, [contentData, templateId, details]);
  if (!details) {
    return <div>Loading..........</div>;
  }
  return (
    <div>
      {details && (
        <div>
          <div>
            <div className=" flex flex-col gap-5">
              <h1 className="text-3xl font-bold ">{details.name}</h1>
              <div className="relative w-[68%] h-[400px] border rounded-xl shadow-lg shadow-black-1 aspect-video">
                <iframe
                  src={details.image}
                  title={details.name}
                  className="absolute top-0 left-0 w-full h-full border-none"
                />
              </div>
            </div>
            <div className=" mt-5 border border-black-2 rounded-2xl shadow-xl max-h-[500px] overflow-auto  p-5 flex gap-5">
              <Comments/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;
