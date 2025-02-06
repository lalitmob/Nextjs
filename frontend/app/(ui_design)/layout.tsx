"use client";
import "boxicons/css/boxicons.min.css";
import Navbar from "../components/UI_page_components/Navbar";
import Sidebar from "../components/UI_page_components/Sidebar";
import Head from "../components/UI_page_components/Head";
import Triggerprovider from "@/context/Triggerprovider";
import dynamic from "next/dynamic";
// Import the PrivatePage component
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
              <section>
                <Head />
              </section>
              <div className="w-full flex gap-5">
                <section className="w-[20%]">
                  <Sidebar />
                </section>
                <section className="w-[75%]">{children}</section>
              </div>
            </div>
          </div>
        </Triggerprovider>
      </main>
    </PrivatePage>
  );
}
