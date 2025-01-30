import { signupModel } from "@/constant";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface modelType{
     model : boolean,
     setModel : Dispatch<SetStateAction<boolean>>
}
const Authmodel: React.FC<modelType> = ({model, setModel}) => {
  const modelref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const setModelhandle = (e : MouseEvent) => {
      if (modelref.current && !modelref.current.contains(e.target as Node)) {
        setModel(false);
      }
    };
    if (model) {
      document.body.style.overflow ="hidden"
      document.addEventListener("mousedown", setModelhandle);
    }
    return () => {
        document.body.style.overflow ="auto"
      document.removeEventListener("mousedown", setModelhandle);
    };
  }, [model]);
  return (
    <div className="w-full h-screen absolute top-0">
      {model && (
        <div>
          <div className="absolute z-40 h-screen w-full bg-black-1/80 "></div>
          <div
            ref={modelref}
            className="absolute z-50 top-5 left-[38%] bg-white-1 rounded-2xl p-5 flex flex-col items-center border shadow-lg shadow-black-1 min-w-[400px] h-[700px]"
          >
            <h1 className="text-3xl font-bold">{signupModel.heading}</h1>
            <div className="mt-5">
              {signupModel.fields.map((data, id) => (
                <div key={id}>
                  <input
                    className="border rounded-xl mb-5 px-5 py-3 w-full capitalize"
                    type={data.type}
                    placeholder={data.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-3 items-center border-b border-black-1 px-6">
              <button className="border w-full bg-blue-400 text-lg font-semibold text-black-2 rounded-xl bg- capitalize py-4">
                Signup
              </button>
              <div className="flex gap-2 mb-2">
                <span className="text-sm text-gray-600">
                  {signupModel.comment}
                </span>
                <button className="text-xs text-red-500">Login</button>
              </div>
            </div>
            <div className="flex gap-3 mt-5 border w-full items-center justify-center border-black-2 rounded-xl py-3">
              <Image
                src={signupModel.google.icon}
                alt="google"
                width={20}
                height={20}
              />

              <span>{signupModel.google.comment}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authmodel;
