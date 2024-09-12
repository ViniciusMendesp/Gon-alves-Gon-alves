"use client";

import { About } from "@/components/view/about";
import { Banner } from "@/components/view/banner";
import { Form } from "@/components/view/form";
import { Map } from "@/components/view/map";
import { Services } from "@/components/view/services";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-60 gap-20">
      <Banner />
      <Services />
      <About />
      <Form />
      <Map />
    </main>
  );
}
