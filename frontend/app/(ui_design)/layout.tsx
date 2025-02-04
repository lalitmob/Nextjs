"use client";
import "boxicons/css/boxicons.min.css";
import Navbar from "../components/UI_page_components/Navbar";
import Sidebar from "../components/UI_page_components/Sidebar";
import Head from "../components/UI_page_components/Head";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-screen">
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
    </main>
  );
}
