import { head } from "@/constant/Userpage";
import  { triggerContext } from "@/context/Triggerprovider";
import React,{useContext} from "react";

const Head = () => {
  const context =useContext(triggerContext)
  if(!context){
    throw new Error("Context must be used with in it's provider")
  }
  const {setListView, listView} = context
  return (
    <div className="grid grid-cols-[60%_40%] w-full ">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">{head.heading}</h1>
        <p className="text-lg text-gray-700">{head.para}</p>
      </div>
      <div className="flex justify-end  items-end gap-3  p-3 ">
        <div className="flex  h-full pt-12 gap-2">
          <i onClick={()=>setListView(true)} className={`bx bx-list-ul hover:cursor-pointer ${listView&&"text-gray-400"}`}></i>
          <i onClick={()=>setListView(false)} className={`bx bx-grid-alt hover:cursor-pointer ${!listView&&"text-gray-400"}`}></i>
        </div>

        <div className="relative flex w-[50%]  gap-1 flex-col">
          <label>{head.sort.name}</label>
          <select className=" border relative text-gray-600 w-full px-3 py-2 focus:outline-none focus:border-green-700  appearance-none bg-white-1  rounded-full">
            {head.sort.options.map((fields, id) => (
              <option className="text-gray-500" key={id} value={fields}>
                {fields}
              </option>
            ))}
          </select>
          <i className="bx bx-chevron-down absolute right-3 top-12 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Head;
