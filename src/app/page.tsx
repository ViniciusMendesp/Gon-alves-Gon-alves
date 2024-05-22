"use client";

import { About } from "@/components/view/about";
import { Form } from "@/components/view/form";
import { Services } from "@/components/view/services";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">

      <About />
      <Services />
      <Form />
  
    </main>
  );
}
