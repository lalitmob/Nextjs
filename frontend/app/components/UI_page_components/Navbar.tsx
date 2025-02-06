import React from "react";
import { navbar } from "../../../constant/Userpage";
import { useAuth } from "@/app/api/Auth";
import Image from "next/image";
const Navbar = () => {
  const {logout} = useAuth()
  return (
    <div className="w-full border border-b-1 h-[60px] px-[10%]">
      <div className="w-full flex  justify-between items-center h-full ">
        <div className="flex gap-6">
          <div>
            <Image src={navbar.icon} alt="navbar" height={50} width={50} />
          </div>
          {navbar.field.map((data, id) => (
            <div key={id} className="">
              <button className="font-bold text-sm ">{data}</button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={logout} className="font-bold hover:border hover:rounded-2xl px-4 py-2 text-blue-500  hover:bg-blue-500 hover:text-white-1 hover:shadow-lg transition-all duration-300 ">Logout</button>
          <i className="bx bx-cart text-2xl border px-2 py-2 rounded-xl hover:shadow-xl shadow-md"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
