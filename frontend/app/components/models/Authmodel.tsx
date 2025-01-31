import { model_ui } from "@/constant";
import React, { useState } from "react";
import Image from "next/image";
import { RefObject } from "react";
interface modelType {
  model: boolean;
  modelref: RefObject<HTMLDivElement | null>;
}
const Authmodel: React.FC<modelType> = ({ model, modelref }) => {
  const [showmodel, setShowModel] = useState<boolean>(false);

  return (
    <div className="w-full h-screen absolute top-0">
      {model && (
        <div>
          <div className="absolute z-40 h-screen w-full bg-black-1/80 "></div>
          <div
            ref={modelref}
            className={`absolute z-50 top-5 left-[38%] bg-white-1 rounded-2xl p-5 flex flex-col items-center border shadow-lg shadow-black-1 min-w-[400px] ${showmodel?"h-[400px]": "h-[700px]"}`}
          >
            <h1 className="text-3xl font-bold">
              {showmodel ? model_ui.login.heading : model_ui.sign_up.heading}
            </h1>
            {showmodel ? (
              <div className="mt-5">
                {model_ui.login_fields.map((data, id) => (
                  <div key={id}>
                    <input
                      className="border border-black-4 rounded-xl mb-5 px-5 py-3 bg-gray-100/30 w-full capitalize"
                      type={data.type}
                      placeholder={data.placeholder}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5">
                {model_ui.signup_fields.map((data, id) => (
                  <div key={id}>
                    <input
                      className="border border-black-4 rounded-xl mb-5 px-5 py-3 bg-gray-100/30 w-full capitalize"
                      type={data.type}
                      placeholder={data.placeholder}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="w-full flex flex-col gap-3 items-center border-b border-black-1 px-8">
              <button className="border w-full bg-blue-400 text-lg font-semibold text-white-1 rounded-xl bg- capitalize py-3">
                {showmodel? "login" : "sign up"}
              </button>
              <div className="flex gap-2 mb-2">
                <span className="text-sm text-gray-600">
                  {showmodel
                    ? model_ui.sign_up.comment
                    : model_ui.login.comment}
                </span>
                <button onClick={()=>setShowModel(!showmodel)} className="text-xs text-red-500 capitalize">
                  {showmodel ? "sign up " : "login"}
                </button>
              </div>
            </div>
            <div className="flex gap-3 mt-5 border w-full items-center justify-center border-black-2 rounded-xl py-3">
              <Image
                src={model_ui.google.icon}
                alt="google"
                width={20}
                height={20}
              />

              <span>{model_ui.google.comment}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authmodel;
