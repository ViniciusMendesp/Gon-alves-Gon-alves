"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const Persion = () => {
  const services = [
    {
      title: "Aposentadoria por Tempo de Contribuição",
      description:
        "Assessoria e representação em processos de aposentadoria por tempo de contribuição. Garantimos seus direitos previdenciários.",
    },
    {
      title: "Aposentadoria por Idade",
      description:
        "Auxílio e orientação em casos de aposentadoria por idade. Buscamos os melhores benefícios para você.",
    },
    {
      title: "Aposentadoria por Invalidez",
      description:
        "Defesa em processos de aposentadoria por invalidez. Protegemos seus direitos previdenciários em situações de incapacidade.",
    },
    {
      title: "Aposentadoria Especial",
      description:
        "Representação em processos de aposentadoria especial. Garantimos seus direitos em atividades laborais especiais.",
    },
    {
      title: "Auxílio Doença",
      description:
        "Assessoria e defesa em casos de auxílio doença. Protegemos seus direitos em situações de incapacidade temporária.",
    },
    {
      title: "BPC - LOAS",
      description:
        "Orientação e representação em casos de Benefício de Prestação Continuada. Asseguramos seus direitos assistenciais.",
    },
    {
      title: "Salário Maternidade",
      description:
        "Assessoria em processos de salário maternidade. Garantimos seus direitos durante o período de maternidade.",
    },
    {
      title: "Pensão por Morte",
      description:
        "Defesa em processos de pensão por morte. Protegemos seus direitos em situações de óbito de familiar.",
    },
    {
      title: "Auxílio Reclusão",
      description:
        "Assessoria e representação em casos de auxílio reclusão. Garantimos seus direitos previdenciários em situações de reclusão.",
    },
    {
      title: "Outros Benefícios Previdenciários",
      description:
        "Assessoria e representação em outros benefícios previdenciários. Protegemos seus interesses legais na esfera previdenciária.",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default Persion;
