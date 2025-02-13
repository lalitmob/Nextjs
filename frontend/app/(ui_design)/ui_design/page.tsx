"use client";
import Content from "@/app/components/UI_page_components/Content";
import React from "react";
import Sidebar from "@/app/components/UI_page_components/Sidebar";
import Head from "@/app/components/UI_page_components/Head";
import TemplateForm from "@/app/components/models/TemplateModel";
const Page = () => {
  return (
    <div className="relative">
      <section className="mb-10">
        <Head />
      </section>
      <div className="w-full flex gap-5">
        <section className="w-[20%]">
          <Sidebar />
        </section>
        <section className="w-[75%]">
          <Content />
        </section>
      </div>
      <div className="absolute z-20 bg-black-3 rounded-xl -top-5 right-[10%]">
        <TemplateForm />
      </div>
    </div>
  );
};

export default Page;
