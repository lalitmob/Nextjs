"use client";
import "boxicons/css/boxicons.min.css";
import Navbar from "../components/UI_page_components/Navbar";
import Triggerprovider from "@/context/Triggerprovider";
import dynamic from "next/dynamic";
import "dotenv"
const PrivatePage = dynamic(() => import("../components/private/Privatepage"), {
  ssr: false,
});
export default function UIDesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivatePage>
      <main className="relative w-full h-screen">
        <Triggerprovider>
          <div>
            <section className="fixed top-0 left-0 w-full backdrop-blur-xl">
              <Navbar />
            </section>
            <div className="px-[10%] mt-16 py-5 w-full gap-8 flex flex-col">
              <section>{children}</section>
            </div>
          </div>
        </Triggerprovider>
      </main>
    </PrivatePage>
  );
}
