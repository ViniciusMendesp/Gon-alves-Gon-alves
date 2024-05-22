"use client";

import { About } from "@/components/view/about";
import { Footer } from "@/components/view/footer";
import { Form } from "@/components/view/form";
import { Header } from "@/components/view/header";
import { Services } from "@/components/view/services";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Header />
      <About />
      <Services />
      <Form />
      <Footer />
    </main>
  );
}
