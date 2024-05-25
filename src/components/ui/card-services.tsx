import { ReactNode, useState } from "react";
import { Button } from "./button";

export interface CardServicesProps {
  key: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export const CardServices = ({
  icon,
  title,
  description,
}: CardServicesProps) => {
  const [expanded, setExpanded] = useState(false);

  // Limitar a quantidade de caracteres exibidos na descrição
  const limitedDescription = expanded
    ? description
    : description.slice(0, 150) + (description.length > 150 ? "..." : "");

  return (
    <div className="w-full lg:w-[320px] bg-background border border-muted shadow-lg flex flex-col">
      <div className="flex items-center justify-center p-5">{icon}</div>
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-primary text-center">{title}</h2>
        <p className="text-base text-muted-foreground text-center">
          {limitedDescription}
        </p>
        {description.length > 150 && (
          <Button
            variant="link"
            className="text-primary text-sm focus:outline-none"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ver menos" : "Leia mais"}
          </Button>
        )}
      </div>
    </div>
  );
};
