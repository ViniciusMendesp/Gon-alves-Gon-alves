import {
  Accessibility,
  BriefcaseBusiness,
  Siren,
  SquareUser,
} from "lucide-react";
import { CardServices, CardServicesProps } from "../ui/card-services";
import { Container } from "../ui/container";

interface ServicesProps {
  className?: string;
}

export const Services = ({ className }: ServicesProps) => {
  const services: CardServicesProps[] = [
    {
      key: 1,
      icon: <SquareUser className="w-12 h-12" />,
      title: "Direito Civil",
      description:
        "Oferecemos serviços relacionados a contratos, divórcios, inventários, reconhecimento de união estável, guarda, alimentos, danos morais e materiais, entre outras soluções cíveis.",
    },
    {
      key: 2,
      icon: <BriefcaseBusiness className="w-12 h-12" />,
      title: "Direito Trabalhista",
      description:
        "Nosso expertise inclui reclamação trabalhista, abrangendo verbas rescisórias, férias, FGTS, entre outras áreas relacionadas.",
    },
    {
      key: 3,
      icon: <Siren className="w-12 h-12" />,
      title: "Direito Criminal",
      description:
        "Atuamos na defesa em 1ª e 2ª instância, habeas corpus, representação, e em outros serviços relacionados ao direito penal.",
    },
    {
      key: 4,
      icon: <Accessibility className="w-12 h-12" />,
      title: "Direito Previdenciário",
      description:
        "Especializados em aposentadoria por tempo de contribuição, aposentadoria por idade, aposentadoria por invalidez, aposentadoria especial, auxílio-doença, BPC (Benefício de Prestação Continuada), LOAS (Lei Orgânica da Assistência Social), salário-maternidade, pensão por morte, auxílio-reclusão, entre outros benefícios previdenciários.",
    },
  ];

  return (
    <Container
      className={`flex flex-col bg-background items-center gap-5 ${className}`}
    >
      <h1 id="area" className="text-2xl font-bold mb-4">
        Áreas de atuação
      </h1>
      <div className="flex flex-col gap-5 flex-wrap md:flex-row">
        {services.map((service) => (
          <CardServices
            key={service.key}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Container>
  );
};
