import { ReactNode } from "react";
import { Button } from "./button";

export interface CardServicesProps {
  key: number;
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
}

export const CardServices = ({
  icon,
  title,
  description,
  url,
}: CardServicesProps) => {
  return (
    <div className="w-full lg:w-[320px] border border-muted shadow-sm shadow-secondary flex flex-col justify-between">
      <div className="flex items-center justify-center p-5">{icon}</div>
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-primary text-center">{title}</h2>
        <p className="text-base text-muted-foreground text-center">
          {description}
        </p>
      </div>
      <div className="p-5">
        <a
          href={url}
          className="block text-center text-base text-primary underline"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="w-full">
            Saiba mais
          </Button>
        </a>
      </div>
    </div>
  );
};
