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
        "Consultoria e representação em contratos, responsabilidade civil, família e sucessões. Protegemos seus direitos civis com eficácia.",
      url: "/services/direito-civil",
    },
    {
      key: 2,
      icon: <BriefcaseBusiness className="w-12 h-12" />,
      title: "Direito Trabalhista",
      description:
        "Assessoria em reclamações trabalhistas, acordos e negociações sindicais. Defendemos seus direitos no ambiente de trabalho.",
      url: "/services/direito-trabalhista",
    },
    {
      key: 3,
      icon: <Siren className="w-12 h-12" />,
      title: "Direito Criminal",
      description:
        " Defesa em processos criminais, acompanhamento de inquéritos e assessoria penal. Garantimos a sua defesa em todas as etapas.",
      url: "/services/direito-criminal",
    },
    {
      key: 4,
      icon: <Accessibility className="w-12 h-12" />,
      title: "Direito Previdenciário",
      description:
        "Orientação em concessão de benefícios e revisão de aposentadorias. Ajudamos você a garantir seus direitos previdenciários.",
      url: "/services/direito-previdenciario",
    },
  ];

  return (
    <Container className={`flex flex-col gap-5 ${className}`}>
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
            url={service.url}
          />
        ))}
      </div>
    </Container>
  );
};
