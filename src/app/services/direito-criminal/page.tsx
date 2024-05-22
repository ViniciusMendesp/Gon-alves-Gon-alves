"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Footer } from "@/components/view/footer";
import { Header } from "@/components/view/header";

const Criminal = () => {
  const services = [
    {
      title: "Defesas em 1ª e 2ª Instância",
      description:
        "Representação em processos criminais nas instâncias inicial e de recurso.",
    },
    {
      title: "Habeas Corpus",
      description:
        "Assessoria e defesa em casos de Habeas Corpus. Protegemos seus direitos individuais.",
    },
    {
      title: "Representação em Processos Criminais",
      description:
        "Defesa em processos criminais diversos. Garantimos seus direitos durante o processo.",
    },
    {
      title: "Outros Serviços em Direito Penal",
      description:
        "Assessoria e representação em outras áreas do Direito Penal. Protegemos seus interesses legais.",
    },
  ];

  return (
    <>
      <Header />
      <Container className="min-h-screen">
        <h1>Direito Cívil</h1>
        <Accordion type="single" collapsible>
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{service.title}</AccordionTrigger>
              <AccordionContent>{service.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default Criminal;
