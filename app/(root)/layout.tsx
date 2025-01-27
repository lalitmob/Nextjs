'use client'
import Navbar from "../components/Navbar";
import 'boxicons/css/boxicons.min.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-screen">
    <div>
        <section className="">
            <Navbar/>
        </section>
        {children}
    </div>

    </main>
  );
}
