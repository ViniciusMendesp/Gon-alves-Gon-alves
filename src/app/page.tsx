"use client";

import { Separator } from "@/components/ui/separator";
import { About } from "@/components/view/about";
import { Banner } from "@/components/view/banner";
import { Form } from "@/components/view/form";
import { Map } from "@/components/view/map";
import { Services } from "@/components/view/services";

export default function Home() {
  return (
    <main className="flex flex-col justify-between ">
      <Banner />
      <Services />
      <Separator />
      <About />
      <Separator />
      <Form />
      <Separator />
      <Map />
      <Separator />
    </main>
  );
}
