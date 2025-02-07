import { sidebar } from "@/constant/Userpage";
import { triggerContext } from "@/context/Triggerprovider";
import React, { useContext, useState, useEffect } from "react";
interface collapseState {
  [key: string]: boolean;
}
const Sidebar = () => {
  const [collapse, setCollapse] = useState<collapseState>({
    framework: true,
    ui_framework: false,
    categories: false,
    resources: false,
    template_types: true,
  });
  const context = useContext(triggerContext);
  if (!context) {
    throw new Error("context must be used with in trigger provider");
  }
  const { contentData, setFilteredData, prompt, setPrompt } = context;
  useEffect(() => {
    if (contentData && prompt) {
      const filteredData = contentData.data.filter((data) =>
        data.name.toLowerCase().includes(prompt.toLowerCase())
      );
      setFilteredData({ data: filteredData });
    }
     else {
      setFilteredData(contentData);
    }
  }, [prompt, contentData]);

  const collapseHandler = (id: string) => {
    setCollapse((prev) => ({ ...prev, [id]: !prev[id] }));
    console.log(collapse);
  };
  return (
    <div className="flex flex-col gap-3 h-[700px] px-2 py-5">
      <div className="flex flex-col items-start">
        <h3 className="mb-2 text-sm font-bold text-gray-500">
          {sidebar.search.heading}
        </h3>
        <div className="relative flex">
          <i className="bx bxs-search absolute top-3 left-2 text-blue-400 bg-white-1 text-lg "></i>
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type={sidebar.search.type}
            className="w-full h-10 border-2 px-10 capitalize rounded-xl"
            placeholder={sidebar.search.placeholder}
          />
        </div>
      </div>
      <div className="filter-section ">
        {sidebar.select.map((data) => (
          <div key={data.key} className="border-y py-2 bg-gray-100/30 px-2 ">
            <div
              onClick={() => collapseHandler(data.key)}
              className="flex w-full justify-between hover:cursor-pointer hover:bg-gray-200/50 rounded-xl px-2 py-1/2 items-center mb-2"
            >
              <h2 className="mb-1">{data.heading}</h2>

              <i
                className={`${
                  collapse[data.key]
                    ? "bx bx-chevron-up "
                    : "bx bx-chevron-down"
                }`}
              />
            </div>

            <div className={`${collapse[data.key] && "hidden"}`}>
              {data.options.map((data, id) => (
                <div key={id} className="flex gap-3 px-2 mb-2">
                  <input type="checkbox" />
                  <label className="text-sm text-gray-700">{data}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
