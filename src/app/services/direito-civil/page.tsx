"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const Civil = () => {
  const services = [
    {
      title: "Contratos",
      description:
        "Consultoria e representação em contratos. Protegemos seus direitos com eficácia.",
    },
    {
      title: "Divórcios",
      description:
        "Assessoria em processos de divórcio. Garantimos seus direitos durante o processo.",
    },
    {
      title: "Inventários",
      description:
        "Auxílio em inventários. Asseguramos uma divisão justa dos bens.",
    },
    {
      title: "Reconhecimento de União Estável",
      description:
        "Acompanhamento em processos de reconhecimento de união estável. Protegemos seus direitos conjugais.",
    },
    {
      title: "Guarda",
      description:
        "Assessoria em casos de guarda de filhos. Buscamos a melhor solução para as crianças.",
    },
    {
      title: "Alimentos",
      description:
        "Defesa em casos de pensão alimentícia. Garantimos o sustento das partes envolvidas.",
    },
    {
      title: "Danos Morais e Materiais",
      description:
        "Representação em casos de danos morais e materiais. Buscamos reparação pelos danos sofridos.",
    },
  ];

  return (
    <>
      <Container className="min-h-screen">
        <h1 className="text-2xl">Direito Cívil</h1>
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

export default Civil;
