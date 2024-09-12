import Image from "next/image";
import { Container } from "../ui/container";
import LogoBlack from "/public/logo-black.svg";

import { useState } from "react";

interface AboutProps {
  className?: string;
}

export const Banner = ({ className }: AboutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Container className={`flex flex-col mb-8 py-5 ${className} `}>
      <div className="flex flex-col  md:mt-60 mt-20 items-center gap-4 bg-background text-foreground">
        <Image
          src={LogoBlack}
          className="h-28 w-28 lg:w-40 lg:h-40 "
          alt="logo"
        />
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Gonçalves & Gonçalves
        </h1>
        <p className="text-center">Advocacia e Consultoria Jurídica</p>
      </div>
    </Container>
  );
};
