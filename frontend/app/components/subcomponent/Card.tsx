import { plans_page } from "@/constant";
import React from "react";
interface cardProps {
  heading: string;
  price: string;
  constant_data: string[];
  gray?: string[];
}
const Card: React.FC<cardProps> = ({ heading, price, constant_data, gray }) => {
  return (
    <div className="flex flex-col  border border-g w-[350px] rounded-xl shadow-sm shadow-black-1 h-[550px] pl-14 pt-11 gap-5">
      <h3 className="text-lg text-gray-300">{heading}</h3>
      <h1 className="text-xl font-semibold">{price}</h1>
      <div className="mb-5">
        {constant_data.map((data, id) => (
          <div className="flex" key={id}>
            <i className="bx bx-check text-green-600"></i>
            <p className="mb-3 text-xs">{data}</p>
          </div>
        ))}
        <div>
          {gray?.map((data, id) => (
            <div className="mb-3 ml-4 text-gray-300 text-xs" key={id}>
              {data}
            </div>
          ))}
        </div>
      </div>
      <button className="border w-36 py-2 rounded-xl hover:bg-red-400 justify-center">
        {plans_page.button}
      </button>
    </div>
  );
};

export default Card;
