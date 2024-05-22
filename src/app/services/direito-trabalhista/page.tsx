"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const Labourite = () => {
  const services = [
    {
      title: "Reclamação Trabalhista: Verbas Rescisórias",
      description:
        "Assessoria e representação em casos de reclamação trabalhista envolvendo verbas rescisórias. Garantimos seus direitos durante a rescisão do contrato de trabalho.",
    },
    {
      title: "Reclamação Trabalhista: Férias",
      description:
        "Auxílio e orientação em reclamações trabalhistas relacionadas a férias. Buscamos garantir o correto pagamento e usufruto das férias do trabalhador.",
    },
    {
      title: "Reclamação Trabalhista: FGTS",
      description:
        "Defesa em reclamações trabalhistas envolvendo FGTS. Protegemos seus direitos em relação ao Fundo de Garantia por Tempo de Serviço.",
    },
    {
      title: "Outras Reclamações Trabalhistas",
      description:
        "Assessoria e representação em outras reclamações trabalhistas. Protegemos seus interesses legais em diversas questões relacionadas ao trabalho.",
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

export default Labourite;
