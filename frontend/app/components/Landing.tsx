import { cn } from "@/lib/utils";
import { homepage_content as data } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
interface props {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
}
const Landing: React.FC<props> = ({ idx, setIdx }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [idx]);
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex justify-between items-center mt-[150px] sm:mt-[250px] md:mt-[300px]  w-full max-w-[1200px]">
        <i
          onClick={() => setIdx((prev: number) => (prev === 0 ? 0 : prev - 1))}
          className="bx bx-chevron-left text-white-1 text-4xl sm:text-5xl md:text-6xl cursor-pointer hover:text-green-400 transition"
        ></i>

        <section className="flex flex-col text-center text-white-1 w-full max-w-[736px] items-center">
          <h3 className="pb-3 text-lg sm:text-xl md:text-2xl font-semibold">
            {data[idx].heading}
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl pb-4 font-bold">
            {data[idx].subheading}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl pb-6 text-white-1">
            {data[idx].paragraph}
          </p>
        </section>

        <i
          onClick={() =>
            setIdx((prev: number) =>
              prev === data.length - 1 ? prev : prev + 1
            )
          }
          className="bx bx-chevron-right text-white-1 text-4xl sm:text-5xl md:text-6xl cursor-pointer hover:text-green-400 transition"
        ></i>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {data.map((_, id) => {
          const isActive = idx === id;
          return (
            <div
              key={id}
              onClick={() => setIdx(id)}
              className={cn(
                " flex items-center justify-center rounded-full cursor-pointer transition",
                isActive ? "bg-green-400" : " hover:bg-gray-400"
              )}
            >
              <i className="bx bx-circle text-xs sm:text-sm"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
