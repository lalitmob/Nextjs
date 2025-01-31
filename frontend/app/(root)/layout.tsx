"use client";
import Modelprovider from "@/context/Modelprovider";
import Navbar from "../components/Navbar";
import "boxicons/css/boxicons.min.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Modelprovider>
      <main className="relative w-full h-screen">
        <div>
          <section className="">
            <Navbar />
          </section>
          {children}
        </div>
      </main>
    </Modelprovider>
  );
}
